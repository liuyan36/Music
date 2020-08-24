<template>
  <div>
    <ul class="top-nav">
      <li class="tab-item">
        <router-link to="/home">首页</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/songlist">歌单</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/artists">歌手</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/top">榜单</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/mine">我的</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/search">搜索</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="less" scoped>
.top-nav {
  display: flex;
  background: #fff;
  .tab-item {
    flex: 1;
    text-align: center;
    padding-top: 10px;
    color: rgb(77, 85, 93);
    a {
      display: block;
      padding-bottom: 8px;

       &.router-link-active {
        color: red;
        border-bottom: 2px solid red;

         &::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 1px;
          width: 35px;
          height: 2px;
          transform: translateX(-50%);
          background: #02a774;
        }
       }
    }
  }
}
</style>