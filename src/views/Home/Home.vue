<template>
  <div class="home">
    <nav-bar />
    <music-list></music-list>
    <MySwiper :banners="banners" />
    <MusicTabs></MusicTabs>
    <BackTop></BackTop>
  </div>
</template>

<script>
import MusicList from './childComps/MusicList/musicList'
import MySwiper from "../../components/MySwiper";
import MusicTabs from './childComps/MusicTabs/musicTabs'

import BackTop from "../../components/backTop/BackTop"
import NavBar from '../../components/navbar/NavBar'

export default {
  name: 'Home',
  data() {
    return {
       banners: [
                // 引入图片资源，需要require
                require("../../assets/img/b1.jpg"),
                require("../../assets/img/b2.jpg"),
                require("../../assets/img/b3.jpg")
            ]
        }
  },
  components: {
    MusicList,
    MySwiper,
    MusicTabs,
    BackTop,
    NavBar
  }
}
</script>
