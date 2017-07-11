<template>
  <div class="news-list-nav">
    <router-link v-if="page > 1" :to="'/' + type + '/' + (page - 1)">&lt; prev</router-link>
    <a v-else class="disabled">&lt; prev</a>
    <span>{{ page }}/{{ maxPage }}</span>
    <router-link v-if="hasMore" :to="'/' + type + '/' + (page + 1)">more &gt;</router-link>
    <a v-else class="disabled">more &gt;</a>
  </div>
</template>

<script>
import Vue from 'vue'
import { watchList } from '../api'

export default {
  name: 'news-list-nav',

  computed: {
    type () {
      return this.$route.params.type || 'top'
    },
    page () {
      return Number(this.$route.params.page) || 1
    },
    maxPage () {
      const { itemsPerPage, lists } = this.$store.state
      return Math.ceil(lists[this.type].length / itemsPerPage) || 1
    },
    hasMore () {
      return this.page < this.maxPage
    }
  },

  beforeMount () {
    // Hacky way of adding route to state
    Vue.set(this.$store.state, 'route', this.$route)

    if (this.$root._isMounted) {
      this.loadItems(this.page)
    }
    // watch the current list for realtime updates
    this.unwatchList = watchList(this.type, ids => {
      this.$store.commit('SET_LIST', { type: this.type, ids })
      this.$store.dispatch('ENSURE_ACTIVE_ITEMS').then(() => {
        this.displayedItems = this.$store.getters.activeItems
      })
    })
  },

  beforeDestroy () {
    this.unwatchList()
  },

  watch: {
    page (to, from) {
      this.loadItems(to, from)
    }
  },

  methods: {
    loadItems (to = this.page, from = -1) {
      this.$store.dispatch('FETCH_LIST_DATA', {
        type: this.type
      }).then(() => {
        if (this.page < 0 || this.page > this.maxPage) {
          this.$router.replace(`/${this.type}/1`)
          return
        }
        this.transition = from === -1
          ? null
          : to > from ? 'slide-left' : 'slide-right'
        this.displayedPage = to
        this.displayedItems = this.$store.getters.activeItems
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.news-list-nav
  background-color #fff
  border-radius 2px
  padding 15px 30px
  position fixed
  text-align center
  top 55px
  left 0
  right 0
  z-index 998
  box-shadow 0 1px 2px rgba(0,0,0,.1)
  a
    margin 0 1em
  .disabled
    color #ccc
</style>
