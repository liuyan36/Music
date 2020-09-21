<template>
  <div>
    <home-web></home-web>
    <nav-bar class="category-nav">
      <div slot="center">热门图片</div>
    </nav-bar>
    <scroll class="centent">
    </scroll>
  </div>
</template>
<script>
import { mapState } from 'vuex'

import NavBar from "../../components/common/navbar/NavBar";
import Scroll from "../../components/common/scroll/Scroll";
import HomeWeb from "../Home/chlieran/HomeWeb";

export default {
  name: "profile",
  components: {
    NavBar,
    Scroll,
    HomeWeb
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch('getShopScenery')
    this.$store.dispatch('getShopAnime')
  },
  computed: {
    ...mapState(['scenery', 'anime'])
  }
};
</script>
<style scoped>
.category-nav {
  color: #ffffff;
  width: 100%;
  position: absolute;
  top: 0px;
  color: red;
  background-color: transparent;
  font-weight: 700;
}
.centent {
  overflow: hidden;
  position: absolute;
  top: 43px;
  bottom: 43px;
  left: 0;
  right: 0;
}
</style>
