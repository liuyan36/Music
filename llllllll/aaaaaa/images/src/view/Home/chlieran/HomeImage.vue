<template>
  <div class="home-image">
    <div v-for="(item, index) in imgs.image" :key="index">
      <img :src="item.图片" alt="">
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'HomeImage',
  data() {
    return {
    }
  },
  mounted() {
    this.$store.dispatch('getShopImgs')
  },
  computed: {
    ...mapState(['imgs']),
  },
}
</script>

<style scoped>
.home-image { display: flex; flex-wrap: wrap; justify-content: space-evenly; }
.home-image img { width: 135px; height: 148px; margin-bottom: 5%;}

</style>
