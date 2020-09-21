<template>
  <div class="home">
    <div class="wrap-header">
      <homeService></homeService>
      <div class="title">湖北百农科技有限公司</div>
      <a href="#contact" class="contact-btn">联系我们</a>
    </div>
    <div class="wrap-content">
      <div class="about margin-bottom-40">
        <home-title></home-title>
      </div>
      <div class="reason margin
      -bottom-40">
        <div class="wrap-title">
          <h3>REASON</h3>
          <p>选择百农科技开发定制的理由</p>
          <img src="../assets/img/下载.jpg" alt />
        </div>
        <div class="reason-content">
          <div v-for="(item, index) in textArray" :key="index" :class="classAs(index)">
              <p class="reason-title">{{item.msg}}</p>
              <p>{{item.text}}</p>
          </div>
        </div>
      </div>
      <div class="service">
        <div class="wrap-title">
          <h3>SERVICE ITEMS</h3>
          <p>服务项目</p>
          <img src="../assets/img/下载.jpg" alt />
        </div>
        <div class="service-content">
          <router-link :to="item.ref"
                  :class="classBs(index)"
                  v-for="(item, index) in srcArray" :key="index">
            <img :src="item.image" alt />
            <section>
              <p class="service-title">{{item.title}}</p>
              <p class="service-desc">{{item.desc}}</p>
            </section>
          </router-link>
          <router-link to="/homesoftware"
                  class="service-item service-item-3">
            <img src="../assets/img/图层2.png" alt />
            <section>
              <p class="service-title">软件外包</p>
              <p class="service-desc">软件外包包括: app开发、电商平台开发、大<br>数据系统开发、等名类项目的软件外包服务。</p>
            </section>
          </router-link>
        </div>
      </div>
      <div class="case margin-bottom-40">
        <div class="wrap-title">
          <h3>CASE</h3>
          <p>经典案例</p>
          <img
            src="data:image/png;base64,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"
            alt
          />
        </div>
        <div class="case-content">
          <div class="case-item" v-for="(item, index) in caseArray" :key="index">
            <img
              :src="item.images"
              alt
            />
            <p class="case-title">{{item.msg}}</p>
            <p class="case-desc">{{item.text}}</p>
          </div>
        </div>
      </div>
      <div id="contact" class="contact margin-bottom-40">
        <div class="wrap-title">
          <h3>CONTACT</h3>
          <p>联系我们</p>
          <img src="../assets/img/下载.jpg" alt />
        </div>
        <div class="contact-content">
          <img src="../assets/img/contact-map.04b632b0.png" alt />
          <section class="contact-section">
            <p class="contact-title">联系百农科技</p>
            <p class="contact-desc">地址：湖北省赤壁市赤马港办事处陆水湖大道科苑小区1-61号</p>
            <p class="contact-desc">邮编：101149</p>
            <p class="contact-desc">电话：15810364078</p>
            <p class="contact-desc">邮箱：cyshuxin@sina.com</p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeTitle from './home-title'
import homeService from './home-service'
export default {
  name: "Home",
  components: {
    homeTitle,
    homeService
  },
  data() {
    return {
      textArray: [
        {msg: '平 台', text: '多个主流开发平台'},
        {msg: '团 队', text: '众多优秀开发团队'},
        {msg: '服 务', text: '提供优秀且全面的服务'},
        {msg: '产 品', text: '打造众多优秀产品方案'}
      ],
      srcArray: [
        {image: require('../assets/img/tm.png'), title: '软件定制', desc: '为您提供高端的软件定制服务', ref: '/homesoftware' },
        {image: require('../assets/img/图层4.png'), title: '网站开发', desc: '具有丰富的网站系统开发经验和新颖的创意水平',ref: '/homesoftware'},
        {image: require('../assets/img/图层6.png'), title: '移动APP', desc: '涵盖IOS、Android、iPad等多种平台开发',ref: '/homesoftware'},
        // {image: require('../assets/img/图层2.png'), title: '软件外包', desc: '软件外包包括: app开发、电商平台开发、大数据系统开发、等名类项目的软件外包服务。',ref: '/homesoftware'},
      ],
      caseArray: [
        {
          images: require('../assets/img/zy.png'),
          msg: '章鱼直播',
          text: '全民原创互动的体育直播平台，提高超清的赛事直播和娱乐视频直播，直播内容包括中超、英超、欧冠、西甲、德甲、NBA，足总杯等热门联赛，也包括台球、羽毛球、乒乓球等直播。'
        },
        {
          images: require('../assets/img/bl.png'),
          msg: '章鱼部落',
          text: '章鱼部落app是一款关于体育的兴趣话题的社区应用，在这里你可以发现到多样的兴趣版块内容。可以与志同趣和的好友们进行相关的兴趣话题内容的探讨讨论哦。发现到更多的有趣话题内容。'
        },
        {
          images: require('../assets/img/dk.png'),
          msg: '蛋壳租房',
          text: '蛋壳租房APP海量房源信息，提供全国真真实实的房源动态、透明的房产行情，高效的找房工具，你想要的都在这里，随时随地了解既想了解的，方便快捷，系统性能稳定。'
        },
        {
          images: require('../assets/img/51.png'),
          msg: '51租房',
          text: '51租房APP提供保障数量与质量的真实房源，房主可以有房出租，租客也可以无房求租，可以安心机选房源，让租客更快租到理想的房子，让房东更快出租控制的房源，租房就找51租房，让你租到满意的房子，实现安居梦。'
        },
        {
          images: require('../assets/img/kuai.png'),
          msg: '快租房',
          text: '快租房APP致力于为用户提供舒适的住房体验，多样的特色房源，挑选自己最喜欢的风格，随时随地打开快租房APP，浏览房源照片，了解房源介绍和价格信息，实时看房，想看就看，为您提供全方位服务。界面清晰友好，性能稳定。'
        }
      ]
    };
  },
  methods: {
    classAs(index) {
      return "reason-item reason-item-" + index
    },
    classBs(index) {
      return "service-item service-item-" + index
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/home.css"

</style>
