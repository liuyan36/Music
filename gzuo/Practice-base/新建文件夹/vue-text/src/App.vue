<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view/>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav/index'

export default {
  name: 'App',
  components: {
    HeaderNav
  }
}
</script>

<style>

</style>
