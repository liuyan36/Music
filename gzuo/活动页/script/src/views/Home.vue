<template>
  <div class="home">
    <img class="home-img" src="../assets/img/background.png" alt />
    <div class="login_box">
      <div class="avatar_box">
        <p
          style="text-align: center; line-height: 48px; font-size: 20px; color: rgb(255, 255, 255)"
        >报名入口</p>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        style="margin-top: 14%; margin-left: 5%; margin-right: 5%;"
      >
        <el-form-item label="选择城市" prop="region">
          <el-cascader class="caseaders" v-model="ruleForm.region" :options="options" :show-all-levels="false"></el-cascader>
        </el-form-item>
        <el-form-item label="手机号:" prop="loginId">
          <el-input style="position: relative; font-size: 14px; margin-left: 4%;width: 64%; display: inline-block;" type="loginId"
                    v-model.number="ruleForm.loginId" maxlength="11" placeholder="请输入手机号"
                    autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item style="text-align: center;"> 
          <el-button type="primary" @click="submitForm('ruleForm')">报名成功</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="login_boxs">
      <div class="avatar_boxs">
        <p style="text-align: center; line-height: 48px; font-size: 20px; color: rgb(255, 255, 255)">竞赛规则</p>
      </div>
      <div class="avatar_text">
        <p style="font-size: 16px;color: #333333;line-height: 27px;">比赛采取十人制比赛的赛制，分成中部赛区、南部赛区、北部赛区，东部赛区，西部赛区，实行赛会制度。每个赛区10支球队，分成2组进行比赛
          小组前两名出现进入全国赛。
        </p>
        <p style="font-size: 16px; color: #333333;line-height: 27px;">
          竞赛办法：
        </p>
        <p style="font-size: 14px; color: #333333;line-height: 27px;">
          采用国际足联最新比赛规则的各小组赛以及淘汰赛的比赛时间全部安排上下半场各40分钟，中场休息10分钟。
        </p>
      </div>
       <div class="avatar_boxs">
        <p style="text-align: center; line-height: 48px; font-size: 20px; color: rgb(255, 255, 255)">竞赛安排</p>
      </div>
      <div class="avatar_border">
          <div class="avatar_border_p">
            <p>报名时间：10月1日-11月30日</p>
            <p>比赛时间：12月1日-04月30日</p>
          </div>
      </div>
      <div class="avatar_boxs">
        <p style="text-align: center; line-height: 48px; font-size: 20px; color: rgb(255, 255, 255)">报名要求</p>
      </div>
      <div class="avatar_border">
          <div class="avatar_border_text">
            <p>球员必须是年满18岁，且为该城市的常住人口，每个城市可报名一只支队伍，代表该城市出战。</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      ruleForm: {
        region: "",
        loginId:''
      },
      options:  [
        { 
            "value": "hebei",
            "label": "河北",
            "children": [
                { 
                    "value": "1",
                    "label": "石家庄市"
                },
                { 
                    "value": "2",
                    "label": "唐山市"
                },
                { 
                    "value": "3",
                    "label": "秦皇岛市"
                },
                { 
                    "value": "4",
                    "label": "邯郸市"
                },
                { 
                    "value": "5",
                    "label": "邢台市"
                },
                { 
                    "value": "6",
                    "label": "保定市"
                },
                { 
                    "value": "7",
                    "label": "张家口市"
                },
                { 
                    "value": "8",
                    "label": "承德市"
                },
                { 
                    "value": "9",
                    "label": "沧州市"
                },
                { 
                    "value": "10",
                    "label": "廊坊市"
                },
                { 
                    "value": "11",
                    "label": "衡水市"
                }
            ]
        },
        { 
            "value": "beijing",
            "label": "北京市",
            "children": [
                { 
                    "value": "1",
                    "label": "朝阳区"
                },
                { 
                    "value": "2",
                    "label": "密云区"
                },
                { 
                    "value": "3",
                    "label": "大兴区"
                },
                { 
                    "value": "4",
                    "label": "顺义区"
                },
                { 
                    "value": "5",
                    "label": "东城区"
                },
                { 
                    "value": "6",
                    "label": "西城区"
                },
                { 
                    "value": "7",
                    "label": "昌平区"
                },
                { 
                    "value": "8",
                    "label": "海淀区"
                },{ 
                    "value": "9",
                    "label": "丰台区"
                },
                { 
                    "value": "10",
                    "label": "石景山区"
                },
                { 
                    "value": "11",
                    "label": "平谷区"
                },
                { 
                    "value": "12",
                    "label": "延庆区"
                },
                { 
                    "value": "13",
                    "label": "门头沟区"
                },
                { 
                    "value": "14",
                    "label": "房山区"
                },
                { 
                    "value": "15",
                    "label": "通州区"
                }
            ]
        },
        { 
            "value": "shanxi",
            "label": "山西省",
            "children": [
                { 
                    "value": "1",
                    "label": "太原市"
                },
                { 
                    "value": "2",
                    "label": "大同市"
                },
                { 
                    "value": "3",
                    "label": "阳泉市"
                },
                { 
                    "value": "4",
                    "label": "长治市"
                },
                { 
                    "value": "5",
                    "label": "晋城市"
                },
                { 
                    "value": "6",
                    "label": "朔州市"
                },
                { 
                    "value": "7",
                    "label": "晋中市"
                },
                { 
                    "value": "8",
                    "label": "运城市"
                },
                { 
                    "value": "9",
                    "label": "忻州市"
                },
                { 
                    "value": "10",
                    "label": "临汾市"
                },
                { 
                    "value": "11",
                    "label": "吕梁市"
                }
            ]
        },
        { 
            "value": "liaoling",
            "label": "辽宁省",
            "children": [
                { 
                    "value": "1",
                    "label": "沈阳市"
                },
                { 
                    "value": "2",
                    "label": "大连市"
                },
                { 
                    "value": "3",
                    "label": "鞍山市"
                },
                { 
                    "value": "4",
                    "label": "抚顺市"
                },
                { 
                    "value": "5",
                    "label": "本溪市"
                },
                { 
                    "value": "6",
                    "label": "丹东市"
                },
                { 
                    "value": "7",
                    "label": "锦州市"
                },
                { 
                    "value": "8",
                    "label": "营口市"
                },
                { 
                    "value": "9",
                    "label": "阜新市"
                },
                { 
                    "value": "10",
                    "label": "辽阳市"
                },
                { 
                    "value": "11",
                    "label": "盘锦市"
                },
                { 
                    "value": "12",
                    "label": "铁岭市"
                },
                { 
                    "value": "13",
                    "label": "朝阳市"
                },
                { 
                    "value": "14",
                    "label": "葫芦岛市"
                }
            ]
        },
        { 
            "value": "jiling",
            "label": "吉林省",
            "children": [
                { 
                    "value": "1",
                    "label": "长春市"
                },
                { 
                    "value": "2",
                    "label": "吉林市"
                },
                { 
                    "value": "3",
                    "label": "四平市"
                },
                { 
                    "value": "4",
                    "label": "辽源市"
                },
                { 
                    "value": "5",
                    "label": "通化市"
                },
                { 
                    "value": "6",
                    "label": "白山市"
                },
                { 
                    "value": "7",
                    "label": "松原市"
                },
                { 
                    "value": "8",
                    "label": "白城市"
                },
                { 
                    "value": "9",
                    "label": "延边朝鲜"
                }
            ]
        },
        { 
            "value": "heilongjiang",
            "label": "黑龙江省",
            "children": [
                { 
                    "value": "1",
                    "label": "哈尔滨市"
                },
                { 
                    "value": "2",
                    "label": "齐齐哈尔市"
                },
                { 
                    "value": "3",
                    "label": "鸡西市"
                },
                { 
                    "value": "4",
                    "label": "鹤岗市"
                },

                { 
                    "value": "5",
                    "label": "双鸭山市"
                },
                { 
                    "value": "6",
                    "label": "大庆市"
                },
                { 
                    "value": "7",
                    "label": "伊春市"
                },
                { 
                    "value": "8",
                    "label": "佳木斯市"
                },
                { 
                    "value": "9",
                    "label": "七台河市"
                },
                { 
                    "value": "10",
                    "label": "牡丹江市"
                },
                { 
                    "value": "11",
                    "label": "黑河市"
                },
                { 
                    "value": "12",
                    "label": "绥化市"
                },
                { 
                    "value": "13",
                    "label": "大兴安岭"
                }
            ]
        },
        { 
            "value": "jiangsu",
            "label": "江苏省",
            "children": [
                { 
                    "value": "1",
                    "label": "南京市"
                },
                { 
                    "value": "2",
                    "label": "无锡市"
                },
                { 
                    "value": "3",
                    "label": "徐州市"
                },
                { 
                    "value": "4",
                    "label": "常州市"
                },
                { 
                    "value": "5",
                    "label": "苏州市"
                },
                { 
                    "value": "6",
                    "label": "南通市"
                },
                { 
                    "value": "7",
                    "label": "连云港市"
                },
                { 
                    "value": "8",
                    "label": "淮安市"
                },
                { 
                    "value": "9",
                    "label": "盐城市"
                },
                { 
                    "value": "10",
                    "label": "扬州市"
                },
                { 
                    "value": "11",
                    "label": "镇江市"
                },
                { 
                    "value": "12",
                    "label": "泰州市"
                },
                { 
                    "value": "13",
                    "label": "宿迁市"
                }
            ]
        },
        { 
            "value": "zhejiang",
            "label": "浙江省",
            "children": [
                { 
                    "value": "1",
                    "label": "杭州市"
                },
                { 
                    "value": "2",
                    "label": "宁波市"
                },
                { 
                    "value": "3",
                    "label": "温州市"
                },
                { 
                    "value": "4",
                    "label": "嘉兴市"
                },
                { 
                    "value": "5",
                    "label": "湖州市"
                },
                { 
                    "value": "6",
                    "label": "绍兴市"
                },
                { 
                    "value": "7",
                    "label": "金华市"
                },
                { 
                    "value": "8",
                    "label": "衢州市"
                },
                { 
                    "value": "9",
                    "label": "舟山市"
                },
                { 
                    "value": "10",
                    "label": "台州市"
                },
                { 
                    "value": "11",
                    "label": "丽水市"
                }

            ]
        },
        { 
            "value": "anhui",
            "label": "安徽省",
            "children": [
                { 
                    "value": "1",
                    "label": "合肥市"
                },
                { 
                    "value": "2",
                    "label": "芜湖市"
                },
                { 
                    "value": "3",
                    "label": "蚌埠市"
                },
                { 
                    "value": "4",
                    "label": "淮南市"
                },
                { 
                    "value": "5",
                    "label": "马鞍山市"
                },
                { 
                    "value": "6",
                    "label": "淮北市"
                },
                { 
                    "value": "7",
                    "label": "铜陵市"
                },
                { 
                    "value": "8",
                    "label": "安庆市"
                },
                { 
                    "value": "9",
                    "label": "黄山市"
                },
                { 
                    "value": "10",
                    "label": "滁州市"
                },
                { 
                    "value": "11",
                    "label": "阜阳市"
                },
                { 
                    "value": "12",
                    "label": "宿州市"
                },
                { 
                    "value": "13",
                    "label": "六安市"
                },
                { 
                    "value": "14",
                    "label": "豪州市"
                },
                { 
                    "value": "15",
                    "label": "池州市"
                },
                { 
                    "value": "16",
                    "label": "宣城市"
                }
            ]
        },
        { 
            "value": "fujian",
            "label": "福建省",
            "children": [
                { 
                    "value": "1",
                    "label": "福州市"
                },
                { 
                    "value": "2",
                    "label": "厦门市"
                },
                { 
                    "value": "3",
                    "label": "莆田市"
                },
                { 
                    "value": "4",
                    "label": "三明市"
                },
                { 
                    "value": "5",
                    "label": "泉州市"
                },
                { 
                    "value": "6",
                    "label": "漳州市"
                },
                { 
                    "value": "7",
                    "label": "南平市"
                },
                { 
                    "value": "8",
                    "label": "龙岩市"
                },
                { 
                    "value": "9",
                    "label": "宁德市"
                }
            ]
        },
        { 
            "value": "jiangxi",
            "label": "江西省",
            "children": [
                { 
                    "value": "1",
                    "label": "南昌市"
                },
                { 
                    "value": "2",
                    "label": "景德镇市"
                },
                { 
                    "value": "3",
                    "label": "萍乡市"
                },
                { 
                    "value": "4",
                    "label": "九江市"
                },
                { 
                    "value": "5",
                    "label": "新余市"
                },
                { 
                    "value": "6",
                    "label": "鹰潭市"
                },
                { 
                    "value": "7",
                    "label": "赣州市"
                },
                { 
                    "value": "8",
                    "label": "吉安市"
                },
                { 
                    "value": "9",
                    "label": "宜春市"
                },
                { 
                    "value": "10",
                    "label": "抚州市"
                },
                { 
                    "value": "11",
                    "label": "上饶市"
                }
            ]
        },
        { 
            "value": "shandong",
            "label": "山东省",
            "children": [
                { 
                    "value": "1",
                    "label": "济南市"
                },
                { 
                    "value": "2",
                    "label": "青岛市"
                },
                { 
                    "value": "3",
                    "label": "淄博市"
                },
                { 
                    "value": "4",
                    "label": "枣庄市"
                },
                { 
                    "value": "5",
                    "label": "东营市"
                },
                { 
                    "value": "6",
                    "label": "烟台市"
                },
                { 
                    "value": "7",
                    "label": "潍坊市"
                },
                { 
                    "value": "8",
                    "label": "济宁市"
                },
                { 
                    "value": "9",
                    "label": "泰安市"
                },
                { 
                    "value": "10",
                    "label": "威海市"
                },
                { 
                    "value": "11",
                    "label": "日照市"
                },
                { 
                    "value": "12",
                    "label": "临沂市"
                },
                { 
                    "value": "13",
                    "label": "德州市"
                },
                { 
                    "value": "14",
                    "label": "聊城市"
                },
                { 
                    "value": "15",
                    "label": "滨州市"
                },
                { 
                    "value": "16",
                    "label": "菏泽市"
                }
            ]
        },
        { 
            "value": "henan",
            "label": "河南省",
            "children": [
                { 
                    "value": "1",
                    "label": "郑州市"
                },
                { 
                    "value": "2",
                    "label": "开封市"
                },
                { 
                    "value": "3",
                    "label": "洛阳市"
                },
                { 
                    "value": "4",
                    "label": "平顶山市"
                },
                { 
                    "value": "5",
                    "label": "安阳市"
                },
                { 
                    "value": "6",
                    "label": "鹤壁市"
                },
                { 
                    "value": "7",
                    "label": "新乡市"
                },
                { 
                    "value": "8",
                    "label": "焦作市"
                },
                { 
                    "value": "9",
                    "label": "濮阳市"
                },
                { 
                    "value": "10",
                    "label": "许昌市"
                },
                { 
                    "value": "11",
                    "label": "漯河市"
                },
                { 
                    "value": "12",
                    "label": "三门峡市"
                },
                { 
                    "value": "13",
                    "label": "南阳市"
                },
                { 
                    "value": "14",
                    "label": "商丘市"
                },
                { 
                    "value": "15",
                    "label": "信阳市"
                },
                { 
                    "value": "16",
                    "label": "周口市"
                },
                { 
                    "value": "17",
                    "label": "驻马店市"
                }
            ]
        },
        { 
            "value": "hubei",
            "label": "湖北省",
            "children": [
                { 
                    "value": "1",
                    "label": "武汉市"
                },
                { 
                    "value": "2",
                    "label": "黄石市"
                },
                { 
                    "value": "3",
                    "label": "十堰市"
                },
                { 
                    "value": "4",
                    "label": "宜昌市"
                },
                { 
                    "value": "5",
                    "label": "襄阳市"
                },
                { 
                    "value": "6",
                    "label": "鄂州市"
                },
                { 
                    "value": "7",
                    "label": "荆门市"
                },
                { 
                    "value": "8",
                    "label": "孝感市"
                },
                { 
                    "value": "9",
                    "label": "荆州市"
                },
                { 
                    "value": "10",
                    "label": "黄冈市"
                },
                { 
                    "value": "11",
                    "label": "咸宁市"
                },
                { 
                    "value": "12",
                    "label": "随州市"
                },
                { 
                    "value": "13",
                    "label": "恩施土家族自治州"
                }
            ]
        },
        { 
            "value": "hunan",
            "label": "湖南省",
            "children": [
                { 
                    "value": "1",
                    "label": "长沙市"
                },
                { 
                    "value": "2",
                    "label": "株洲市"
                },
                { 
                    "value": "3",
                    "label": "湘潭市"
                },
                { 
                    "value": "4",
                    "label": "衡阳市"
                },
                { 
                    "value": "5",
                    "label": "邵阳市"
                },
                { 
                    "value": "6",
                    "label": "岳阳市"
                },
                { 
                    "value": "7",
                    "label": "常德市"
                },
                { 
                    "value": "8",
                    "label": "张家界市"
                },
                { 
                    "value": "9",
                    "label": "益阳市"
                },
                { 
                    "value": "10",
                    "label": "郴州市"
                },
                { 
                    "value": "11",
                    "label": "永州市"
                },
                { 
                    "value": "12",
                    "label": "怀化市"
                },
                { 
                    "value": "13",
                    "label": "娄底市"
                },
                { 
                    "value": "14",
                    "label": "湘西土家族自治州"
                }
            ]
        },
        { 
            "value": "guangdong",
            "label": "广东省",
            "children": [
                { 
                    "value": "1",
                    "label": "广州市"
                },
                { 
                    "value": "2",
                    "label": "韶关市"
                },
                { 
                    "value": "3",
                    "label": "深圳市"
                },
                { 
                    "value": "4",
                    "label": "珠海市"
                },
                { 
                    "value": "5",
                    "label": "汕头市"
                },
                { 
                    "value": "6",
                    "label": "佛山市"
                },
                { 
                    "value": "7",
                    "label": "江门市"
                },
                { 
                    "value": "8",
                    "label": "湛江市"
                },
                { 
                    "value": "9",
                    "label": "茂名市"
                },
                { 
                    "value": "10",
                    "label": "肇庆市"
                },
                { 
                    "value": "11",
                    "label": "惠州市"
                },
                { 
                    "value": "12",
                    "label": "梅州市"
                },
                { 
                    "value": "13",
                    "label": "汕尾市"
                },
                { 
                    "value": "14",
                    "label": "河源市"
                },
                { 
                    "value": "15",
                    "label": "阳江市"
                },
                { 
                    "value": "16",
                    "label": "清远市"
                },
                { 
                    "value": "17",
                    "label": "东莞市"
                },
                { 
                    "value": "18",
                    "label": "中山市"
                },
                { 
                    "value": "19",
                    "label": "潮州市"
                },
                { 
                    "value": "21",
                    "label": "揭阳市"
                },
                { 
                    "value": "22",
                    "label": "云浮市"
                }
            ]
        },
        { 
            "value": "hainan",
            "label": "海南省",
            "children": [
                { 
                    "value": "1",
                    "label": "海口市"
                },
                { 
                    "value": "2",
                    "label": "三亚市"
                },
                { 
                    "value": "3",
                    "label": "三沙市"
                },
                { 
                    "value": "4",
                    "label": "儋州市"
                }
            ]
        },
        { 
            "value": "sichuang",
            "label": "四川省",
            "children": [
                { 
                    "value": "1",
                    "label": "成都市"
                },
                { 
                    "value": "2",
                    "label": "自贡市"
                },
                { 
                    "value": "3",
                    "label": "攀枝花市"
                },
                { 
                    "value": "4",
                    "label": "泸州市"
                },
                { 
                    "value": "5",
                    "label": "德阳市"
                },
                { 
                    "value": "6",
                    "label": "绵阳市"
                },
                { 
                    "value": "7",
                    "label": "广元市"
                },
                { 
                    "value": "8",
                    "label": "遂宁市"
                },
                { 
                    "value": "9",
                    "label": "内江市"
                },
                { 
                    "value": "10",
                    "label": "乐山市"
                },
                { 
                    "value": "11",
                    "label": "南充市"
                },
                { 
                    "value": "12",
                    "label": "眉山市"
                },
                { 
                    "value": "13",
                    "label": "宜宾市"
                },
                { 
                    "value": "14",
                    "label": "广安市"
                },
                { 
                    "value": "15",
                    "label": "达州市"
                },
                { 
                    "value": "16",
                    "label": "雅安市"
                },
                { 
                    "value": "17",
                    "label": "巴中市"
                },
                { 
                    "value": "18",
                    "label": "资阳市"
                }
            ]
        },
        { 
            "value": "guizhou",
            "label": "贵州省",
            "children": [
                { 
                    "value": "1",
                    "label": "贵阳市"
                },
                { 
                    "value": "2",
                    "label": "六盘水市"
                },
                { 
                    "value": "3",
                    "label": "遵义市"
                },
                { 
                    "value": "4",
                    "label": "安顺市"
                },
                { 
                    "value": "5",
                    "label": "毕节市"
                },
                { 
                    "value": "6",
                    "label": "铜仁市"
                }
            ]
        },
        { 
            "value": "yunnan",
            "label": "云南省",
            "children": [
                { 
                    "value": "1",
                    "label": "昆明市"
                },
                { 
                    "value": "2",
                    "label": "曲靖市"
                },
                { 
                    "value": "3",
                    "label": "玉溪市"
                },
                { 
                    "value": "4",
                    "label": "保山市"
                },
                { 
                    "value": "5",
                    "label": "昭通市"
                },
                { 
                    "value": "6",
                    "label": "丽江市"
                },
                { 
                    "value": "7",
                    "label": "普洱市"
                },
                { 
                    "value": "8",
                    "label": "临沧市"
                }
            ]
        },
        { 
            "value": "shanxi",
            "label": "陕西省",
            "children": [
                { 
                    "value": "1",
                    "label": "西安市"
                },
                { 
                    "value": "2",
                    "label": "铜川市"
                },
                { 
                    "value": "3",
                    "label": "宝鸡市"
                },
                { 
                    "value": "4",
                    "label": "咸阳市"
                },
                { 
                    "value": "5",
                    "label": "渭南市"
                },
                { 
                    "value": "6",
                    "label": "延安市"
                },
                { 
                    "value": "7",
                    "label": "汉中市"
                },
                { 
                    "value": "8",
                    "label": "榆林市"
                },
                { 
                    "value": "9",
                    "label": "安康市"
                },
                { 
                    "value": "10",
                    "label": "商洛市"
                }
            ]
        },
        { 
            "value": "gansu",
            "label": "甘肃省",
            "children": [
                { 
                    "value": "1",
                    "label": "兰州市"
                },
                { 
                    "value": "2",
                    "label": "嘉峪关市"
                },
                { 
                    "value": "3",
                    "label": "金昌市"
                },
                { 
                    "value": "4",
                    "label": "白银市"
                },
                { 
                    "value": "5",
                    "label": "天水市"
                },
                { 
                    "value": "6",
                    "label": "武威市"
                },
                { 
                    "value": "7",
                    "label": "张掖市"
                },
                { 
                    "value": "8",
                    "label": "平凉市"
                },
                { 
                    "value": "9",
                    "label": "酒泉市"
                },
                { 
                    "value": "10",
                    "label": "庆阳市"
                },
                { 
                    "value": "11",
                    "label": "定西市"
                },
                { 
                    "value": "12",
                    "label": "陇南市"
                }
            ]
        },
        { 
            "value": "qinghai",
            "label": "青海省",
            "children": [
                { 
                    "value": "1",
                    "label": "西宁市"
                },
                { 
                    "value": "2",
                    "label": "海东市"
                }
            ]
        },
        { 
            "value": "taiwang",
            "label": "台湾省",
            "children": [
                { 
                    "value": "1",
                    "label": "台北"
                },
                { 
                    "value": "2",
                    "label": "高雄"
                },
                { 
                    "value": "3",
                    "label": "基隆"
                },
                { 
                    "value": "4",
                    "label": "台中"
                },
                { 
                    "value": "5",
                    "label": "台南"
                },
                { 
                    "value": "6",
                    "label": "新竹"
                },
                { 
                    "value": "7",
                    "label": "嘉义"
                },
                { 
                    "value": "8",
                    "label": "新北"
                },
                { 
                    "value": "9",
                    "label": "桃园"
                }
            ]
        },
        { 
            "value": "tianjian",
            "label": "天津市",
            "children": [
                { 
                    "value": "1",
                    "label": "和平区"
                },
                { 
                    "value": "2",
                    "label": "河东区"
                },
                { 
                    "value": "3",
                    "label": "河西区"
                },
                { 
                    "value": "4",
                    "label": "南开区"
                },
                { 
                    "value": "5",
                    "label": "河北区"
                },
                { 
                    "value": "6",
                    "label": "红桥区"
                },
                { 
                    "value": "7",
                    "label": "东丽区"
                },
                { 
                    "value": "8",
                    "label": "西青区"
                },
                { 
                    "value": "9",
                    "label": "津南区"
                },
                { 
                    "value": "10",
                    "label": "北辰区"
                },
                { 
                    "value": "11",
                    "label": "武清区"
                },
                { 
                    "value": "12",
                    "label": "宝坻区"
                },
                { 
                    "value": "13",
                    "label": "滨海新区"
                },
                { 
                    "value": "14",
                    "label": "宁河区"
                },
                { 
                    "value": "15",
                    "label": "静海区"
                },
                { 
                    "value": "16",
                    "label": "蓟州区"
                }
            ]
        },
        { 
            "value": "shanghai",
            "label": "上海市",
            "children": [
                { 
                    "value": "1",
                    "label": "黄浦区"
                },
                { 
                    "value": "2",
                    "label": "徐汇区"
                },
                { 
                    "value": "3",
                    "label": "长宁区"
                },
                { 
                    "value": "4",
                    "label": "静安区"
                },
                { 
                    "value": "5",
                    "label": "普陀区"
                },
                { 
                    "value": "6",
                    "label": "虹口区"
                },
                { 
                    "value": "7",
                    "label": "杨浦区"
                },
                { 
                    "value": "8",
                    "label": "闵行区"
                },
                { 
                    "value": "9",
                    "label": "宝山区"
                },
                { 
                    "value": "10",
                    "label": "嘉定区"
                },
                { 
                    "value": "11",
                    "label": "浦东新区"
                },
                { 
                    "value": "12",
                    "label": "金山区"
                },
                { 
                    "value": "13",
                    "label": "松江区"
                },
                { 
                    "value": "14",
                    "label": "青浦区"
                },
                { 
                    "value": "15",
                    "label": "奉贤区"
                },
                { 
                    "value": "16",
                    "label": "崇明区"
                }
            ]
        },
        { 
            "value": "chongqing",
            "label": "重庆市",
            "children": [
                { 
                    "value": "1",
                    "label": "万州区"
                },
                { 
                    "value": "2",
                    "label": "涪陵区"
                },
                { 
                    "value": "3",
                    "label": "渝中区"
                },
                { 
                    "value": "4",
                    "label": "大渡口区"
                },
                { 
                    "value": "5",
                    "label": "江北区"
                },
                { 
                    "value": "6",
                    "label": "沙坪坝区"
                },
                { 
                    "value": "7",
                    "label": "九龙坡区"
                },
                { 
                    "value": "8",
                    "label": "南岸区"
                },
                { 
                    "value": "9",
                    "label": "北碚区"
                },
                { 
                    "value": "10",
                    "label": "綦江区"
                },
                { 
                    "value": "11",
                    "label": "大足区"
                },
                { 
                    "value": "12",
                    "label": "渝北区"
                },
                { 
                    "value": "13",
                    "label": "巴南区"
                },
                { 
                    "value": "14",
                    "label": "黔江区"
                },
                { 
                    "value": "15",
                    "label": "长寿区"
                },
                { 
                    "value": "16",
                    "label": "江津区"
                },
                { 
                    "value": "17",
                    "label": "合川区"
                },
                { 
                    "value": "18",
                    "label": "永川区"
                },
                { 
                    "value": "19",
                    "label": "南川区"
                },
                { 
                    "value": "20",
                    "label": "璧山区"
                },
                { 
                    "value": "21",
                    "label": "铜梁区"
                },
                { 
                    "value": "22",
                    "label": "潼南区"
                },
                { 
                    "value": "23",
                    "label": "荣昌区"
                },
                { 
                    "value": "24",
                    "label": "开州区"
                },
                { 
                    "value": "25",
                    "label": "梁平区"
                },
                { 
                    "value": "26",
                    "label": "武隆区"
                }
            ]
        }
      ],
      value: "",
      input: "",
      rules: {
        region: [
          { required: true, message: "请选择你所属城市", trigger: "change" }
        ],
        loginId: [
          { required: true, message: "手机号不能为空", trigger: "change" },
          { type: 'number', message: '手机号必须为数字'}
        ]
      }
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '报名成功！',
            type: 'success',
            duration: 3000,
            onClose: () => {
              this.$refs.ruleForm.resetFields();
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>

.home {
  height: 194vh;
  width: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background-color: #007f00;
}
.home-img {
  width: 100%;
}

.login_box {
  width: 90%;
  height: 250px;
  background-color: #fff;
  border-radius: 14px;
  position: absolute;
  left: 50%;
  top: 61%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 48px;
  width: 144px;

  background-color: #fbac22;
  border-radius: 54px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 5px;
  background-color: #eee;
}
.el-button + .el-button {
  margin-left: 50px;
}


.login_boxs {
  width: 90%;
  height: 95vh;
  background-color: #F1F8F1;
  border-radius: 14px;
  position: absolute;
  left: 50%;
  top: 140%;
  transform: translate(-50%, -50%);
}
.avatar_boxs {
  height: 48px;
  width: 144px;

  background-color: #fbac22;
  border-radius: 54px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avatar_text {
    width: 80%;
    margin: 10% 10% 0 10%;
    height: 300px;
}
.avatar_border {
    width: 80%;
    height: 100px;
    margin: 10%;
}
.avatar_border_p {
    text-align: center;
    margin-top: 7%;
    font-size: 19px;
}
.avatar_border_text {
    margin-top: 26%;
    font-size: 15px;
}
.el-cascader__dropdown .el-cascader-panel .el-cascader-menu {
    min-width: 120px;
    box-sizing: border-box;
    color: #606266;
    border-right: solid 1px #E4E7ED;
}
.caseaders {
    width: 64%;
}
</style>
