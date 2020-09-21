<template>
  <div>
    <img :src="acg.imgurl" alt="">
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "HomeWeb",
  mounted() {
    this.$store.dispatch('getShopAcg')
  },
  computed: {
    ...mapState(['acg'])
  },
}
</script>

<style scoped>
img {
  width: 100%;
  margin-top: 15%;
}

</style>
