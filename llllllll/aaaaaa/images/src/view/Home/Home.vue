<template>
  <div class="home">
      <home-web></home-web>
      <nav-bar class="home-nav"><div slot="center">图片大全</div></nav-bar>
     <home-swiper class="home-swiper" />
    <home-list  class="home-list"/>
    <scroll class="centent">
      <home-image />
    </scroll>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import Scroll from '../../components/common/scroll/Scroll'
// import TabControl from '../../components/content/tabControl/tabControl'
import HomeSwiper from './chlieran/HomeSwiper'
import HomeList from './chlieran/HomeList'
import HomeImage from './chlieran/HomeImage'
import HomeWeb from './chlieran/HomeWeb'


export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    HomeSwiper,
    HomeList,
    HomeImage,
    HomeWeb
    // TabControl
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.home { width: 100%;height: 100%;}
.home-nav { color: #ffffff; width: 100%;;position: absolute; top: 0px;color: red; background-color:transparent; font-weight: 700;}
.home-swiper { position: absolute; top: 42px; }
.home-list { position: absolute; top: 43%;}
.centent { /* height: calc(100% - 54px); overflow: hidden; */ overflow: hidden; position: absolute; top: 65%; bottom: 43px; left: 0; right: 0;}

</style>
