<template>
    <div class="home-tops">
        <div class="home-topes">
            <a href="https://midas.yunzhan365.com/books/jnev/mobile/index.html">用技术创造幸福 / MIDAS 企业画册 </a>
        </div>
        <div class="home-text">
            <p>北京市海淀区中关村南大街乙56号方圆大厦21层 / 邮编:100044</p><br>
            <p>Tel: 010-51659908 / Fax: 010-51659908-105</p><br>
            <p>Copyright © SINCE 1989 MIDAS Information Technology Co., Ltd. All rights reserved.</p>
        </div>
        <div class="muss_info">
            <p class="title">MIDAS 产品主页</p>
            <span><a href="http://cn.midasuser.com/gen/">建筑</a></span>
            <span><a href="http://cn.midasuser.com/civil/">桥梁</a></span>
            <span><a href="http://cn.midasuser.com/gts/index.asp">岩土</a></span>
            <span><a href="http://cn.midasuser.com/meshfree/">机械</a></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeTop"
}
</script>

<style scoped>
.home-tops {
    margin-top: 435px;
    height: 200px;
    border-top: 1px solid;
}
.home-topes {
    margin-top: 10px;
}
.home-topes a {
    text-decoration: none;
    color: black;
    font-size: 10px;
}
.home-text {
    margin-top: 50px;
}
.home-text p {
    float: left;
    font-size: 10px;
    color: #848484;
    margin: 0;
    padding: 0;
}
.muss_info {
    margin-top: -100px;
    float: right;
}
.muss_info p {
    margin-left: 35%;
}
.muss_info span a {
    text-decoration: none;
    padding: 10px;
}
</style>