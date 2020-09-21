<template>
  <div class="category">
    <home-web></home-web>
    <nav-bar class="category-nav">
      <div slot="center">热门图片</div>
    </nav-bar>
    <div class="tab">
        <div class="tab-item">
          <!-- 使用replace的方式进行路由切换 （路由懒加载） -->
          <router-link to="/category/scenery" replace>风景</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/category/anime" replace>动画</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/category/reality" replace>热门</router-link>
        </div>
    </div>
    <!-- 缓存路由组件对象 -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";

import HomeWeb from "../Home/chlieran/HomeWeb";
export default {
  name: "Category",
  data() {
    return {
    }
  },
  components: {
    NavBar,
    HomeWeb
  },
  methods: {}
};
</script>
<style scoped>
.category {
  width: 100%;
  height: 100%;
}
.category-nav {
  color: #ffffff;
  width: 100%;
  position: absolute;
  top: 0px;
  color: red;
  background-color: transparent;
  font-weight: 700;
}
.tab {
  height: 40px;
  line-height: 40px;
  background: #fff;
  position: absolute;
  top: 42px;
  width: 100%;
}
.tab-item {
  float: left;
  width: 33.33333%;
  text-align: center;
  font-size: 14px;
  color: rgb(77, 85, 93);
}
.tab-item a {
  display: block;
  position: relative;
  text-decoration: none;
}
.router-link-active {
  color: #02a774;
}
.tab-item a ::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 1px;
  width: 35px;
  height: 2px;
  transform: translateX(-50%);
  background: #02a774;
}
</style>
