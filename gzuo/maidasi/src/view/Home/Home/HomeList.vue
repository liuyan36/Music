<template>
  <div class="home-headers">
    <div class="home-list">
      <h3>公司新闻及公告</h3>
      <div>
        <a
          href="https://mp.weixin.qq.com/s?__biz=MjM5Njc5OTQwMg==&amp;mid=2652024212&amp;idx=1&amp;sn=423ff23279532c3ad8181243d4a4fccc&amp;chksm=bd05bb518a723247119d4c2b949703cf224ea20aa022a3ae136e8d31fed072bf58b7ac6f15c1&amp;token=1615398133&amp;lang=zh_CN#rd"
          target="_blank"
        >
          <p>基坑设计一体化软件XD5.0发布内容抢先看</p>
        </a>
        <a
          href="https://mp.weixin.qq.com/s?__biz=MjM5Njc5OTQwMg==&amp;mid=2652024124&amp;idx=1&amp;sn=f0c702f62b70c012d5170dc649af1ecf&amp;chksm=bd05bbf98a7232efc6688a53e79541b5433daa69af24c4527c2768ff6941fe4886b2ed3777d3&amp;token=1615398133&amp;lang=zh_CN#rd"
          target="_blank"
        >
          <p>冬去春来从头越！MIDAS 2019武汉建筑结构...</p>
        </a>
        <a href="https://mp.weixin.qq.com/s?__biz=MjM5Njc5OTQwMg==&amp;mid=2652024074&amp;idx=4&amp;sn=ff7316d02edaf4d4bcb6aba4435eeeae&amp;chksm=bd05bbcf8a7232d98b74a22666faf867b80738971806473c7995bd480dab0d61cf9f5e418885&amp;token=1615398133&amp;lang=zh_CN#rd" target="_blank">
          <p>midas XD 软件通过住建部科技成果评估认证</p>
        </a>
        <a href="https://mp.weixin.qq.com/s?__biz=MjM5Njc5OTQwMg==&amp;mid=2652024074&amp;idx=2&amp;sn=9ede623d079d9127ac269ba97e02d98c&amp;chksm=bd05bbcf8a7232d9890d5e951371f68fd757dc4aa5abd91ae4f224e24f38787ff84a2472c06d&amp;token=1615398133&amp;lang=zh_CN#rd" target="_blank">
          <p>网课回顾12.16-《岩土·月半》-软弱地基处理...</p>
        </a>
      </div>
      <p style="font-size: 17px; font-weight: 700;">
        CEO 致辞
        <br />
        <img src="../../../assets/ren_hr.jpg" alt />
        <span style="font-size: 12px; ">
          我们将秉承坚定的信念，
          <br />不停地追求和探索，
          <br />用技术创造幸福。
        </span>
      </p>
    </div>
    <div class="home-list">
      <h3>招聘信息</h3>
      <div class="home-list-text">
          <p>具有正直和创新精神的你，<br>
            就是MIDAS要找的人才！</p>
            <span style="color:deepskyblue; font-size: 17px;margin-left: 15px">期待各位的挑战。</span><br>
            <a href="" style="font-size: 3px; margin-left:15px;">查看招聘信息</a>
            <a href=""  style="font-size: 3px; margin-left: 11px">查看福利待遇</a>
      </div>
      <p style="font-size: 17px; font-weight: 700;">
        CEO 致辞
        <br />
        <img src="../../../assets/ren_hr.jpg" alt />
        <span style="font-size: 12px; ">
          我们将秉承坚定的信念，
          <br />不停地追求和探索，
          <br />用技术创造幸福。
        </span>
      </p>
    </div>
    <div class="home-list">
      <h3>公司文化</h3>
      <div class="home-list-text" style="    margin-bottom: 15px;">
          <img src="../../../assets/main_share_photo_140711.jpg" style="float: left;" alt="">
          <p style="font-size: 20px;  border-bottom: 0px">MIDAS是利用技术为人类谋<br>幸福的企业<br>
          <span style="font-size: 3px; color: #ccc;">做正确的事，正确的做事</span></p>
            <span style="color:deepskyblue; font-size: 13px;margin-left: 15px">与迈达斯一起努力，实现人生最大的价值！</span><br>
            <a href="" style="font-size: 3px; margin-left:15px;">查看招聘信息</a>
            <a href=""  style="font-size: 3px; margin-left: 11px">查看福利待遇</a>
      </div>
      <p style="font-size: 17px; font-weight: 700;">
        CEO 致辞
        <br />
        <img src="../../../assets/ren_hr.jpg" alt />
        <span style="font-size: 12px; ">
          我们将秉承坚定的信念，
          <br />不停地追求和探索，
          <br />用技术创造幸福。
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeList",
  data() {
    return {
      herader: [
        { h3: "公司新闻及公告" },
        { h3: "招聘信息" },
        { h3: "公司文化" }
      ]
    };
  }
};
</script>

<style scoped>
.home-headers {
  width: 90%;
  height: 60px;
  margin: 0 5% 0 5%;
  display: flex;
  justify-content: space-around;
}

.home-list {
  width: 25%;
  height: 475px;
}
.home-list h3 {
  margin-left: 15px;
  margin-top: 45px;
  font-size: 17px;
  border-bottom: 3px solid black;
  padding-bottom: 19px;
}
.home-list a {
  text-decoration: none;
  color: #cccccc;
}

.home-list p {
  margin-left: 15px;
  font-size: 13px;
  border-bottom: 0.5px solid #cccccc;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 12px;
}

.home-list p img {
  margin-top: 10px;
  float: left;
}
.home-list-text {
    margin-bottom: 70px;
}

a > p {
  color: black;
  font-weight: 700;
}
a:hover > p {
  color: deepskyblue;
  font-weight: 700;
}
</style>