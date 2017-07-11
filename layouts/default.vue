<template>
  <div>
    <navbar></navbar>
    <transition>
      <nuxt class="view"></nuxt>
    </transition>
  </div>
</template>

<script>
import Navbar from '~components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="stylus">
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  background-color lighten(#eceef1, 30%)
  margin 0
  padding-top 55px
  color #34495e
  overflow-y scroll

*, *:before, *:after
  box-sizing border-box
  margin 0

a
  color #34495e
  text-decoration none

.view
  max-width 800px
  margin 0 auto
  position relative

.fade-enter-active, .fade-leave-active
  transition all .2s ease

.fade-enter, .fade-leave-active
  opacity 0

.button--green
  display inline-block
  border-radius 4px
  border 1px solid #3b8070
  color #3b8070
  text-decoration none
  padding 10px 30px
  &:hover
    color #fff
    background-color #3b8070
  
.button--grey
  display inline-block
  border-radius 4px
  border 1px solid #35495e
  color #35495e
  text-decoration none
  padding 10px 30px
  margin-left 15px
  &:hover
    color #fff
    background-color #35495e

</style>
