<template>
  <div class="home">
      <div class="home_box">
          <img class="home-img" src="../assets/background.png" alt="">
          <img class="home-imgs" src="../assets/titleBackground.png" alt="">
          <div class="home-test">领取步骤</div>
      </div>
      <div style="margin-top: 7px">
        <div class="home-text">
            <div><img class="home-text-img" src="../assets/share.png" alt=""><br>
             <span class="home-text-p">分享活动<br>给好友</span></div>
            <div><img class="home-text-imga" src="../assets/arrows.png" alt=""></div>
            <div><img class="home-text-img" src="../assets/invite.png" alt=""><br>
            <span class="home-text-p">好友接受<br>邀请</span></div>
            <div><img class="home-text-imga" src="../assets/arrows.png" alt=""></div>
            <div><img class="home-text-img" src="../assets/download.png" alt=""><br>
            <span class="home-text-p">好友下载<br>注册APP</span></div>
        </div>
       <div style="text-align: center;">
         <img class="home-imgs" src="../assets/titleBackground.png" alt="">
         <div class="home-test">我的邀请</div>
       </div>
       <div style="margin-top: 7px">
          <div class="home-texts">
              <div class="home-text-boxs">
                <div class="home-boxs">
                    <p>0元<br><span style="color: #343434; font-weight: Bold;">总收益</span></p>
                </div>
                <div class="box-border"></div>
                <div class="home-boxs">
                    <p>0元<br><span style="color: #343434; font-weight: Bold;">成功邀请</span></p>
                </div>
                <div class="box-border"></div>
                <div class="home-boxs">
                    <p>0元<br><span style="color: #343434; font-weight: Bold;">未成功</span></p>
                </div>
              </div>
              <img class="home-boxs-img" src="../assets/inviteClick.png" alt="" @click="imgClick">
          </div>
       </div>
        <div style="text-align: center;">
         <img class="home-imgs" src="../assets/titleBackground.png" alt="">
         <div class="home-test">邀请榜</div>
       </div>
       <div style="margin-top: 7px">
          <div class="home-textb">
            <el-table :data="tableData" style="width: 98%; margin-top: 10%; margin-left:1%">
               <el-table-column prop="date" label="排名" width="100" height="10"></el-table-column>
               <el-table-column prop="name" label="用户" > </el-table-column>
               <el-table-column prop="address" label="人数" width="100"> </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      tableData: [
        { date: '1', name: '130****3536', address: '20' },
        { date: '2', name: '136****8952', address: '18' },
        { date: '3', name: '136****2589', address: '16' },
        { date: '4', name: '138****4058', address: '15' },
        { date: '5', name: '188****7969', address: '14' },
        { date: '6', name: '130****8950', address: '12' },
        { date: '7', name: '136****2289', address: '11' },
        { date: '8', name: '177****2456', address: '10' },
        { date: '9', name: '188****2889', address: '9' },
        { date: '10', name: '187****2400', address: '8' }
      ]
    }

  },
  methods: {
    imgClick() {
       this.$alert('分享开始邀请好友赚更多', '邀请好友', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'success',
              message: `邀请成功`
            });
          }
        });
    }
  }
}
</script>

<style>
.home {
  width: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background-color: #FE7620;
}
.home_box {
  text-align: center;
  position:relative;
}
.home-img {
  width: 100%;
}
.home-imgs {
    width: 50%;
    margin-top: -22px;
}
.home-test {
  position: absolute;
  margin-top: -9%;
  margin-right: 40%;
  margin-left: 40%;
  color: #FCFCFC;
  font-size: 18px;
}
.home-text {
    width: 90%;
    margin: -10% 5% 0 5%;
    height: 200px;
    background-color: #FCFCFC;
    border: 1px solid;
    border-radius: 30px;
    text-align: center;
    display: flex;
    margin-bottom: 15%;
}
.home-text-p {
  color: #FF8215;
}

.home-text-img {
    width: 60%;
    margin-top: 70%;
}
.home-text-imga {
  margin-top: 150%;
  width: 60%;
}
.home-texts {
    width: 90%;
    margin: -10% 5% 0 5%;
    height: 200px;
    background-color: #FCFCFC;
    border: 1px solid;
    border-radius: 30px;
    text-align: center;
    margin-bottom: 15%;
}
.home-text-boxs {
    margin: 0px 10% 0 10%;
    display: flex;
    width: 80%;
    margin-top: 10%;
    height: 100px;
}
.home-boxs {
    width: 33%;
    height: 100px;
}
.box-border {
    width: 1px;
    border-right: 1px dashed #cccccc;
    height: 50px;
    margin-top: 10%;
}
.home-boxs p {
  margin: 0 auto;
  margin-top: 36%;
  font-weight: Bold;
  color: red;
}
.home-boxs-img {
  width: 66%;
}

.home-textb {
    width: 90%;
    margin: -10% 5% 0 5%;
    height: 600px;
    background-color: #FCFCFC;
    border: 1px solid;
    border-radius: 30px;
    text-align: center;
    margin-bottom: 5%;
}

.el-message-box__wrapper .el-message-box {
  width: 80%;
  margin: 73% 10% 0 10%;
}


</style>
