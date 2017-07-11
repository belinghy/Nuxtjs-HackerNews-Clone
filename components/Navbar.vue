<template>
  <header class="header">
    <nav class="inner">
      <router-link to="/" exact>
        <img class="logo" src="~assets/logo-48.png" alt="logo">
      </router-link>
      <router-link to="/top">Top</router-link>
      <router-link to="/new">New</router-link>
      <router-link to="/show">Show</router-link>
      <router-link to="/ask">Ask</router-link>
      <router-link to="/job">Jobs</router-link>
      <a class="github" href="https://github.com/belinghy/Nuxtjs-HackerNews-Clone" target="_blank" rel="noopener">
        Project on Github
      </a>
    </nav>
  </header>
</template>

<style lang="stylus" scoped>
.header
  background-color #ff6600
  position fixed
  z-index 999
  height 55px
  top 0
  left 0
  right 0
  .inner
    max-width 800px
    box-sizing border-box
    margin 0px auto
    padding 15px 5px
  a
    color rgba(255, 255, 255, .8)
    line-height 24px
    transition color .15s ease
    display inline-block
    vertical-align middle
    font-weight 300
    letter-spacing .075em
    margin-right 1.8em
    &:hover
      color #fff
    &.router-link-active
      color #fff
      font-weight 400
    &:nth-child(6)
      margin-right 0
  .github
    color #fff
    font-size .9em
    margin 0
    float right

.logo
  width 24px
  margin-right 10px
  display inline-block
  vertical-align middle

@media (max-width 860px)
  .header .inner
    padding 15px 30px

@media (max-width 600px)
  .header
    .inner
      padding 15px
    a
      margin-right 1em
    .github
      display none
</style>
