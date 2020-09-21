<template>
  <div class="home-list">
      <span class="home-list-hot">本周热门列表</span>
      <div class="home-list-now">
        <div class="home-list-for" v-for="(item, index) in imgs" :key="index">
          <a href="#">
            <img class="home-list-img" :src="item.image" alt="">
            <p class="home-list-title">{{item.title}}</p>
          </a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "HomeList",
  data() {
    return {
      imgs: [
        { title: '真人头像', image: require('../../../assets/img/image1/真人.jpg')},
        { title: '动物头像', image: require('../../../assets/img/image1/动物.jpg')},
        { title: '古风头像', image: require('../../../assets/img/image1/古风.jpg')},
        { title: '动漫头像', image: require('../../../assets/img/image1/动漫.jpg')},
        { title: '风景头像', image: require('../../../assets/img/image1/风景.jpg')}
      ]
    }
  }
}
</script>

<style scoped>
a { text-decoration:none; color: black }
.home-list { width: 100%; height: 130px; text-align: center; background-color:  rgba(255,255,255,.5);}
.home-list-hot { font-size: 24px; color: #ffffff; }
.home-list-now { display: flex; justify-content: space-around; }
.home-list-for { width: 50px; height: 50px; margin-top: 4%;}
.home-list-img { width: 50px; }
.home-list-title {font-size: 10px; margin-top: 5px;}
</style>
