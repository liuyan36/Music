<template>
  <div>
    <homeService />
    <div class="home-software">
      <div class="wrap-content">
        <div class="tab">
          <div
            class="tab-item"
            v-for="(text, index) in textArray"
            :key="index"
            :class="{isActive: index === countIndex}"
            @click="ActiveClick(index)"
            @CountIndex="CountIndex(index)"
          >
            <span>{{text.text}}</span>
          </div>
          <div class="tab-item">
            联系我们
            <div class="wrap-contact">
              <p>电话: 15810364078</p>
              <p>邮箱: cyshuxin@sina.com</p>
              <p>邮编: 101149</p>
              <p>地址: 湖北省赤壁市赤马港办事处陆水湖大道科苑小区1-61号</p>
              <img src="/img/weixin.e63772ae.jpg" alt />
              <div class="weixin-tips">微信联系人二维码</div>
            </div>
          </div>
        </div>
        <div class="content">
          <div v-if="countIndex === 0">
            <h3>软件制定</h3>
            <p>天码流星定制开发是天码流星推出的针对企业、事业单位、政府机构提供量身定制的新型开发服务。</p>
            <p>软件定制”开发服务在发达国家是广泛选用的一种软件开发方式。云际科技是根据很多为欧美客户和国内客户效劳的成功经验，为不同的行业、不同的业务操作的公司引进领先的信息化解决方案来满意其特有的需求。</p>
            <p>我们开发的定制软件既要思考在行业运用的领先性，又要确保对客户个性化需要的适用性，提高用户软件交互性和易用性。云际研发的定制软件针对性强，实用方便，维护简单，成本低廉。</p>
            <p>我们为企业提供量身定制软件开发服务，采取专业的定制开发流程来满足各大企业软件产品的不同需求。</p>
            <section>
              <h4>软件定制流程</h4>
              <p>您向我们提出需求</p>
              <p>制定软件建设方案</p>
              <p>双方对项目费用和开发周期达成一致并签订合同后，您需要支付便启动软件开发流程</p>
              <p>开发过程中，经过您的同意，我们会不断提供给您我们的进程和开发过程中的软件供您试用</p>
              <p>当您对软件或网站最终功能满意后，交付的余款，执行软件支付</p>
              <p>我们会提供技术支持</p>
              <p>您在软件使用过程中碰到任何问题都可以在我们这得到解决</p>
            </section>
            <section>
              <h4>软件定制付款方式</h4>
              <p>在双方确定项目基本需求后由软件公司出解决方案</p>
              <p>客户选定解决方案后确定，确定由软件公司研发</p>
              <p>在详细需求调研后，由软件公司出详细需求报告双方确认</p>
              <p>签订中华人民共和国科学技术部印制的技术开发（委托）合同并交付30%预付款</p>
              <p>项目完整实施并由客户验收之后，交付剩余项目款</p>
              <p>根据开发合同一般项目验收后的1年内为BUG免费维护期，1年后维护根据用户自身需求可付费选择延长服务。</p>
            </section>
          </div>
          <div v-else-if="countIndex === 1">
            <h3>网站开发</h3>
            <p>天码流星拥有专业水平的网站建设队伍，具有丰富的网站设计制作经验和新颖的创意水平。我们强调以客户为中心的经验策划理念，将客户的网络行为特征作为设计的核心，结合客户所在行业的网络特点，针对不同行业的每一位客户设计与其品牌、服务、业务等相适合的网站建设方案。</p>
            <section>
              <h4>网站开发流程</h4>
              <p>客户提出网站建设基本需求</p>
              <p>在一个工作日内对客户提出的需求,做出时间预估与项目报价</p>
              <p>在客户确认价格的基础上,我们达成合作意向，客户支付50%订金</p>
              <p>根据客户设计需求,和客户充分沟通,设计出网站首页</p>
              <p>客户对首页进行审核,我们根据客户的反馈对页面做出调整,并最终形成确认</p>
              <p>依次完成内页页面设计提交客户进行审核,并最终形成确认</p>
              <p>根据页面和需求进行程序的开发及前后台页面的整合测试</p>
              <p>网站完成后，客户在我们的测试网址上进行验收，确认支付剩余的50%余款</p>
              <p>为了让您的每一份投入获得100%的效益，我们随时为您的企业提供360度全方位的多元化培训</p>
              <p>至此,整个项目完</p>
            </section>
            <section>
              <h4>网站开发付款方式</h4>
              <p>在双方确定项目基本需求后由软件公司出解决方案</p>
              <p>客户选定解决方案后确定，确定由软件公司研发</p>
              <p>在详细需求调研后，由软件公司出详细需求报告双方确认</p>
              <p>签订中华人民共和国科学技术部印制的技术开发（委托）合同并交付30%预付款</p>
              <p>项目完整实施并由客户验收之后，交付剩余项目款</p>
              <p>根据开发合同一般项目验收后的1年内为BUG免费维护期，1年后维护根据用户自身需求可付费选择延长服务。</p>
            </section>
          </div>
          <div v-else-if="countIndex === 2">
            <h3>移动APP</h3>
            <p>我们具有一定的移动应用APP开发经验，涉及的平台包括iPhone、iPad、Android手机和Android平板; 可以完成各类应用，满足您的需求。</p>
            <section>
              <h4>APP开发流程</h4>
              <p>可以通过电子邮件或电话向我们提出您的要求</p>
              <p>与您通过网络、电话或面谈沟通需求，对需求进行分析</p>
              <p>双方签订合同，您完成预付款支付后，项目会正式成立</p>
              <p>根据客户设计需求,和客户充分沟通,设计出APP界面等主要页面设计</p>
              <p>确定界面设计稿后，将按照功能描述正式开始APP的制作，期间会与您保持沟通确认细节</p>
              <p>当完成APP的制作并内部测试通过后，会提交您体验，并对试用过程的问题进行解决</p>
              <p>当您对APP整体确认满意后，签署软件验收单，完成余款支付后，我们会将APP正式移交给您或提交到相应的应用市场，供用户下载</p>
              <p>我们为您提供长期技术支持，并提供后续服务（含免费服务与收费服务）</p>
            </section>
            <section>
              <h4>移动APP付款方式</h4>
              <p>在双方确定项目基本需求后由软件公司出解决方案</p>
              <p>客户选定解决方案后确定，确定由软件公司研发</p>
              <p>在详细需求调研后，由软件公司出详细需求报告双方确认</p>
              <p>签订中华人民共和国科学技术部印制的技术开发（委托）合同并交付30%预付款</p>
              <p>项目完整实施并由客户验收之后，交付剩余项目款</p>
              <p>根据开发合同一般项目验收后的1年内为BUG免费维护期，1年后维护根据用户自身需求可付费选择延长服务。</p>
            </section>
          </div>
          <div v-else-if="countIndex === 3">
            <h3>外包服务</h3>
            <p>为企业提供量身定制软件开发服务，采取专业的定制开发流程来满足各大企业软件产品的不同需求。</p>
            <section>
              <h4>定制软件开发流程</h4>
              <p>您向我们提出需求</p>
              <p>制定软件建设方案</p>
              <p>双方对项目费用和开发周期达成一致并签订合同后，您需要支付便启动软件开发流程</p>
              <p>开发过程中，经过您的同意，我们会不断提供给您我们的进程和开发过程中的软件供您试用</p>
              <p>当您对软件或网站最终功能满意后，交付的余款，执行软件支付</p>
              <p>我们会提供技术支持</p>
              <p>您在软件使用过程中碰到任何问题都可以在我们这得到解决</p>
            </section>
            <section>
              <h4>外包付款方式</h4>
              <p>在双方确定项目基本需求后由软件公司出解决方案</p>
              <p>客户选定解决方案后确定，确定由软件公司研发</p>
              <p>在详细需求调研后，由软件公司出详细需求报告双方确认</p>
              <p>签订中华人民共和国科学技术部印制的技术开发（委托）合同并交付30%预付款</p>
              <p>项目完整实施并由客户验收之后，交付剩余项目款</p>
              <p>根据开发合同一般项目验收后的1年内为BUG免费维护期，1年后维护根据用户自身需求可付费选择延长服务。</p>
            </section>
          </div>
          <div v-else>
            <!---->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeService from "../home-service";

export default {
  name: "HomeSoftware",
  components: {
    homeService
  },
  data() {
    return {
      textArray: [
        { text: "软件制定" },
        { text: "网站开发" },
        { text: "移动APP" },
        { text: "外包服务" }
      ],
      countIndex: 0
    };
  },
  mounted() {
 // 切换页面时滚动条自动滚动到顶部
    window.scrollTo(0,0);
  },
  methods: {
    ActiveClick(index) {
      this.countIndex = index;
    }
  }
};
</script>

<style scoped>
.home-software {
  background-color: rgb(245, 245, 245);
  margin-top: 80px;
}
.wrap-content {
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 90%;
}

.wrap-content .tab {
  margin-right: 10px;
  margin-top: 2%;
  width: 217px;
}

.wrap-content .tab .tab-item {
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  background-color: #fff;
}
.wrap-content .tab .wrap-contact {
  padding: 6px;
  text-align: left;
  color: #666;
  background-color: #fff;
}
.wrap-content .tab .wrap-contact p {
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 20px;
  word-break: break-all;
}

.wrap-content .tab .tab-item.isActive {
  color: #000;
  border-radius: 12px;
  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.wrap-content .content {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  margin-top: 2%;
  flex: 1;
  padding: 40px;
  background-color: #fff;
}
.wrap-content .content h3 {
  margin-top: -20px;
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 400;
}
.wrap-content .content p {
  margin-bottom: 15px;
  text-indent: 2em;
  font-size: 14px;
  line-height: 20px;
  color: #666;
}
.wrap-content .content h4 {
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
}
.wrap-content .content p:last-child {
  margin-bottom: 0;
}
</style>
