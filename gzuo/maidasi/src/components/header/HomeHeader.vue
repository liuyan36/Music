<template>
  <div>
     <div class="home-top">
          <ul class="left">
              <li><a href="https://en.midasit.com">ENGLISH</a></li>
              <li><a href="https://jp.midasit.com">JAPANESE</a></li>
              <li><a href="https://midasit.com/">KOREAN</a></li>
          </ul>
          <ul class="right">
              <li><a href="https://midasuser.com" target="blank" title="北京迈达斯技术有限公司">WORLDWIDE MIDAS</a></li>
      <li><a href="/map/map/map07.asp">CONTACT US</a></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: "HomeHeader"
}
</script>

<style scoped>
.home-header {
  border: 1px solid;
  background-color: black;
  height: 40px;
}
.home-top {
  margin: 0 10%;
}
ul {
  list-style: none;
}
.left {
  float: left;
  display: flex;
}
.home-top li {
  color: #ccc;
  list-style: none;
  font-size: 10px;
  margin-right: 40px;
}
.right {
  float: right;
  display: flex;
  line-height: 8px;
}
.home-top li a {
  color: #b3b3b3;
  text-decoration: none;
}

.home-header_warp {
  position: relative;
  margin: 0 auto;
  width: 960px;
  height: 100px;
  background-color: #fff;
}
.login {
  position: absolute;
  z-index: 999999;
  padding-top: 22px;
}
a,
a:link {
  color: #000;
  padding: 10px;
  text-decoration: none;
}
.nav {
  position: absolute;
  z-index: 99;
  top: 40px;
  width: 960px;
}
.blind {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 0;
  visibility: hidden;
  width: 0;
  height: 0;
  line-height: 0;
}
.nav .list00 {
  width: 265px;
}
.nav li {
  float: left;
  padding-bottom: 10px;
}
element.style {
  opacity: 1;
  display: none;
}
.nav_depth {
  display: none;
  position: relative;
  z-index: 999;
  margin: 39px 9px 0 -9px;
  padding: 10px 0 0 9px;
  height: 135px;
  border-right: 1px #e5e5e5 solid;
}
.nav_depth li {
  float: none;
  padding-bottom: 0px;
}
.nav_promotion {
  position: absolute;
  overflow: hidden;
  border: 0;
  padding: 20px 0 0;
}
</style>
