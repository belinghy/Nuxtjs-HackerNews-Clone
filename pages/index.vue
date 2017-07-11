<template>
  <section class="container">
    <div>
      <logo></logo>
      <h1 class="title">
        Nuxt HN
      </h1>
      <h2 class="subtitle">
        An Experiment with Vue and Nuxt
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Nuxt.js Doc</a>
        <a href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank" class="button--grey">Vue.js HN</a>
      </div>
      <!--<div>{{ counter }}</div>
      <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>-->
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
  },
  computed: {
    ...mapGetters({
      counter: 'counter'
    })
  }
}
</script>

<style lang="stylus" scoped>
.container
  min-height 90vh
  display flex
  justify-content center
  align-items center
  text-align center

@media (min-height 1080px)
  .container
    margin-top -200px

.title
  font-family "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif /* 1 */
  display block
  font-weight 300
  font-size 100px
  color #35495e
  letter-spacing 1px

.subtitle
  font-weight 300
  font-size 42px
  color #526488
  word-spacing 5px
  padding-bottom 15px

@media (max-width 860px)
  .title
    font-size 64px
  .subtitle
    font-size 32px

.links
  padding-top 15px

@media (min-height 1080px)
  .container
    margin-top -200px

</style>
