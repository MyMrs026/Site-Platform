<template>
  <div class="dashboard-container">
    <el-container>
      <el-header height="100px">
        <div id="main" style="height: 100px">
          <div
            id="left"
            style="float: left; width: 84%; height: 100%"
            class="title-text"
          >
            智慧工地视频监管平台
          </div>
          <div
            id="right"
            style="float: left; width: 16%; height: 100%"
            class="weather"
          >
            <div class="dashboard-subtitle">日期: {{ getCurrentTime() }}</div>
            <div class="dashboard-subtitle2">所在城市: {{ weather.city }}</div>
            <div class="dashboard-subtitle2">今日天气:{{ weather.wea }}</div>
          </div>
        </div>
      </el-header>

      <el-main>
        <!-- 中间部分的代码，分为左中右-->
        <div class="center">
          <div class="center-left">
            <!-- 案件数量部分 -->
            <el-card class="box-card">
              <div slot="header" class="clearfix" style="text-align: center">
                <span>案件数量</span>
              </div>
              <div
                class="text-item"
                style="display: flex; justify-content: space-between"
              >
                <div>今日案件(件){{ todayCase }}</div>
                <div>总共案件(件){{ totalCase }}</div>
              </div>
            </el-card>
            <!-- 案件统计部分 -->
            <div class="case-statistic">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane
                  label="今日案件"
                  name="first"
                  style="margin-top: 10px; line-height: 30px"
                >
                  <div>总共(件) {{ todayCase }}</div>
                  <div>案件类型TOP</div>
                  <ul>
                    <li>物料堆放检测异常</li>
                  </ul>
                  <div>案发位置TOP</div>
                  <ul>
                    <li>摄像头1</li>
                    <li>摄像头2</li>
                    <!-- <li>摄像头3</li>
                    <li>摄像头4</li>
                    <li>摄像头5</li> -->
                  </ul>
                </el-tab-pane>

                <el-tab-pane
                  label="近7日"
                  name="second"
                  style="margin-top: 10px; line-height: 30px"
                >
                  <div>总共(件) {{ sevenCase }}</div>
                  <div>案件类型TOP</div>
                  <ul>
                    <li>物料堆放检测异常</li>
                  </ul>
                  <div>案发位置TOP</div>
                  <ul>
                    <li>摄像头1</li>
                    <li>摄像头2</li>
                    <!-- <li>摄像头3</li>
                    <li>摄像头4</li>
                    <li>摄像头5</li> -->
                  </ul></el-tab-pane
                >
                <el-tab-pane
                  label="近1个月"
                  name="third"
                  style="margin-top: 10px; line-height: 30px"
                >
                  <div>总共(件) {{ monthCase }}</div>
                  <div>案件类型TOP</div>
                  <ul>
                    <li>物料堆放检测异常</li>
                  </ul>
                  <div>案发位置TOP</div>
                  <ul>
                    <li>摄像头1</li>
                    <li>摄像头2</li>
                    <!-- <li>摄像头3</li>
                    <li>摄像头4</li>
                    <li>摄像头5</li> -->
                  </ul></el-tab-pane
                >
              </el-tabs>
            </div>
          </div>
          <div class="center-middle">
            <div class="center-GIS">
              <p style="font-weight: bold">GIS地图</p>
              <p>工地视频信号接入</p>
              <!--              <my-map></my-map>-->
              <BaiduMap></BaiduMap>
            </div>
            <div class="tucengqiehuan">
              <!--              <p>图层切换</p>-->
              <!--              <div>-->
              <!--                <el-radio v-model="ditu" label="1">卫星图</el-radio>-->
              <!--                <el-radio v-model="ditu" label="2">路网图</el-radio>-->
              <!--              </div>-->
            </div>
          </div>
          <div class="center-right">
            <p style="font-weight: bold">请输入工地名称:</p>
            <div class="gongdisousuo">
              <el-input placeholder="请输入内容" v-model="input4">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
              <el-button icon="el-icon-search" type="primary">搜索</el-button>
            </div>
            <div class="site-info">
              这里展示查询到的工地信息,这里要看后端返回的数据，以及数据库存储了哪些信息
            </div>
          </div>
        </div>

        <!-- 底部的代码，分为左右-->
        <div class="bottom">
          <!-- 左边是消息通知-->
          <div class="bottom-left">
            <p style="font-weight: bold">消息通知</p>
            <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column prop="date" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="标题" width="180">
              </el-table-column>
              <el-table-column label="操作">
                <el-link type="primary">查看详情</el-link>
                <span>&nbsp;|&nbsp;</span><el-link type="primary">删除</el-link>
              </el-table-column>
            </el-table>
          </div>
          <!-- 右边是指标趋势-->
          <!-- TODO 1期先使用多简单的文字，2期考虑使用echart折线图来可视化数据-->
          <div class="bottom-right">
            <p style="font-weight: bold">工地指标情况趋势</p>
            1期先使用多简单的文字，2期考虑使用echart折线图来可视化数据
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import myMap from "@/components/map/index";
import BaiduMap from "@/components/baidumap/BaiduMap";

export default {
  name: "Dashboard",
  data() {
    return {
      weather: "",
      options: [
        {
          value: "选项1",
          label: "类别1",
        },
        {
          value: "选项2",
          label: "类别2",
        },
        {
          value: "选项3",
          label: "类别3",
        },
        {
          value: "选项4",
          label: "类别4",
        },
      ],
      value: "",
      isvisable: true,
      radio: 1,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      startTime: "",
      endTime: "",
      ditu: "1",
      input4: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "注意安全",
        },
        {
          date: "2016-05-04",
          name: "天气变热",
        },
        {
          date: "2016-05-01",
          name: "工具存取",
        },
        {
          date: "2016-05-03",
          name: "人员调动安排",
        },
      ],
      activeName: "first",
      todayCase: 3,
      sevenCase: 26,
      monthCase: 60,
      totalCase: 1245,
    };
  },
  //mounted来异步执行weather
  mounted() {
    this.getWeather();
  },
  computed: {
    ...mapGetters(["name"]),
  },
  components: {
    myMap,
    BaiduMap,
  },
  methods: {
    getCurrentTime() {
      //获取当前时间并打印
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      _this.gettime = yy + "/" + mm + "/" + dd + " " + hh + ":" + mf + ":" + ss;
      return _this.gettime;
    },
    getWeather() {
      this.$axios
        .get(
          "http://v1.yiketianqi.com/api?unescape=1&version=v61&appid=23718542&appsecret=5Z6SpskU" //appid：23718542  appsecret：5Z6SpskU
        )
        .then((res) => {
          // let datas = res.data.data[0];//下标为0即表示当天天气数据
          console.log(res.data);
          //console.log(res.data.city);
          this.weather = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-text {
    font-size: 30px;
    line-height: 46px;
    text-align: center;
  }
  &-subtitle {
    margin-top: 14px;
    font-size: 15px;
    line-height: 25px;
    text-align: right;
    font-weight: bold;
  }
  &-subtitle2 {
    font-size: 15px;
    line-height: 25px;
    text-align: right;
    font-weight: bold;
  }
}

.el-header {
  background-color: #ffffe0;
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
}
.title-text {
  font-size: 30px;
  color: #807e79;
  font-weight: bold;
  width: 500px;
  margin: auto;
  background-color: #ffffe0;
  border-radius: 0 0 10px 10px;
  text-align: center;
  margin-top: 20px;
}

.el-main {
  background-color: #ffffe0;
  color: #333;
  text-align: center;
  line-height: 20px !important;
  text-align: left;
}
.center {
  display: flex;
  justify-content: space-between;
  height: 400px;
  line-height: 15px;
}
.center .center-left {
  width: 24%;
  padding-left: 10px;
  //border: 2px solid black;
  background-color: #ffffff;
  border-radius: 10px;
}

.center .center-left .qingkuang {
  height: 70%;
  padding-top: 5px;
}

.center .center-middle {
  width: 50%;
  padding-left: 10px;
  position: relative;
  background-color: #ffffff;
  border-radius: 10px;
}

.center .center-middle .tucengqiehuan {
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-color: rgb(179, 192, 209);
}
.center .center-right {
  width: 24%;
  padding-left: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  line-height: 24px;
}

.center .center-right .gongdisousuo {
  display: flex;
  justify-content: center;
}
.center .center-right .site-info {
  margin-top: 10px;
}

.bottom {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.bottom .bottom-left {
  width: 48%;
  //border: 3px solid lavenderblush;
  padding-left: 10px;
  background-color: #aed5c1;
  border-radius: 10px;
}

.bottom .bottom-right {
  width: 48%;
  padding-left: 10px;
  background-color: #ffffff;
  border-radius: 10px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
  font-size: 16px;
}
.case-statistic {
  font-size: 14px;
}
</style>
