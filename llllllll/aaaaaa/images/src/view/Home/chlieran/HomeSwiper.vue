<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in acg.anime" :key="index">
        <a><img :src="item.images" alt=""></a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper'
import {mapState} from 'vuex'

export default {
  name: "HomeSwiper",
  data() {
    return {
    }
  },
  mounted() {
    this.$store.dispatch('getShopAcg')
  },
  computed: {
    ...mapState(['acg'])
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
img {
  height: 235px;
}
</style>
