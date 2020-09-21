<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="lawngreen">
      <img slot="item-icon" src="../../../assets/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="lawngreen">
      <img slot="item-icon" src="../../../assets/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="lawngreen">
      <img slot="item-icon" src="../../../assets/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar'
  import TabBarItem from '../../common/tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
