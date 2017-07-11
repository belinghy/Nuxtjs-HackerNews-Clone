<template>
  <div class="news-view">
    <news-list-nav></news-list-nav>
    <transition :name="transition">
      <div class="news-list" :key="displayedPage" v-if="displayedPage > 0">
        <transition-group tag="ul" name="item">
          <item v-for="item in displayedItems" :key="item.id" :item="item">
          </item>
        </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
import NewsListNav from '~components/NewsListNav.vue'
import Item from '~components/Item.vue'

export default {
  components: {
    NewsListNav,
    Item
  },

  data () {
    return {
      transition: 'slide-right',
      displayedPage: Number(this.$route.params.page) || 1,
      displayedItems: this.$store.getters.activeItems
    }
  },

  watch: {
    displayedItems (newVal, oldVal) {
      console.log(newVal)
      console.log(oldVal)
    }
  }
}
</script>

<style lang="stylus" scoped>
.news-view
  padding-top 45px

.news-list
  background-color #fff
  border-radius 2px
  position absolute
  margin 30px 0
  width 100%
  transition all .5s cubic-bezier(.55,0,.1,1)
  ul
    list-style-type none
    padding 0
    margin 0

.slide-left-enter, .slide-right-leave-to
  opacity 0
  transform translate(30px, 0)

.slide-left-leave-to, .slide-right-enter
  opacity 0
  transform translate(-30px, 0)

.item-move, .item-enter-active, .item-leave-active
  transition all .5s cubic-bezier(.55,0,.1,1)

.item-enter
  opacity 0
  transform translate(30px, 0)

.item-leave-active
  position absolute
  opacity 0
  transform translate(30px, 0)

@media (max-width 600px)
  .news-list
    margin 10px 0

</style>
