<template>
  <div id="app">
    <HeadNav />
    <router-view/>
  </div>
</template>

<script>
import HeadNav from "./components/HeadNav"
export default {
  name: 'App',
  components:{
    HeadNav
  }
}
</script>

<style>

</style>
