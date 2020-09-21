<template>
    <div class="home">
        <div class="home-header">
           
        </div>
        <div class="home-header_warp">
            <p class="login">
                <a href="/">
                    <img src="../../assets/logo.gif" alt="">
                </a>
            </p>
            <ul class="nav" id="nav">
                <h2 class="blind">公司介绍</h2>
                <li class="list00">
                    <ul class="nav_depth">
                        <li class="nav_promotion"><!--<img src="/main_code/images/nav_promotion.png">--></li>
                    </ul>
			    </li>
                <li class="list01"><a href="/introduction/midasit/intro05.asp" id="menu1">公司介绍</a></li>
                <li class="list02"><a href="/part/introduction/intro01.asp" id="menu2">产品及业务</a></li>
                <li class="list03"><a href="/culture/culture/culture01.asp" id="menu3">公司文化</a></li>
                <li class="list04"><a href="/public/news/list.asp" id="menu4">公告·新闻</a></li>
                <li class="list05"><a href="/recruit/hrsystem/promote.asp" id="menu5">人才招聘</a></li>
                <li class="list07"><a href="/map/cn/map_beijing.asp" id="menu6">公司地图</a></li>
            </ul>
        </div>
        <div class="home-swiper">
            <home-swiper></home-swiper>
        </div>
        <div class="home-list">
            <HomeList></HomeList>
        </div>
        <div class="home-top">
            <home-top></home-top>
        </div>
    </div>
</template>

<script>
import HomeSwiper from './Home/HomeSwiper'
import HomeList from './Home/HomeList'
import HomeTop from './Home/HomeTop'

export default {
    name: 'home',
    components: {
        HomeSwiper,
        HomeList,
        HomeTop
    }
}
</script>

<style scoped>
.home {}
.home-header {
    border: 1px solid ;
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
    list-style:none;
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
a, a:link {
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