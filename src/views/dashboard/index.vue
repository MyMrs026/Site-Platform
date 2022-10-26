<template>
  <div class="dashboard-container">
    <el-container>
      <el-header height="130px">
        <div class="title-text">智慧工地视频监管平台</div>
        <div class="weather">
          <div class="dashboard-subtitle">日期: {{getCurrentTime()}}</div>
          <div class="dashboard-subtitle">所在城市: {{weather.city}}  今日天气:{{weather.wea}}</div>
        </div>
      </el-header>
      <el-main>
        <!-- 中间部分的代码，分为左中右-->
        <div class="center">
          <div class="center-left">
            <p>工地情况统计:</p>
            <el-radio-group v-model="radio">
              <el-radio :label="1">处置类别</el-radio>
              <el-radio :label="2">状态</el-radio>
              <el-radio :label="3">时间</el-radio>
            </el-radio-group>
            <!-- 不选择时间的时候这个能用-->
            <!-- TODO 选择时间的时候下拉菜单隐藏调，不选择时间的时候时间框隐藏调-->
            <el-select v-model="value" v-show="radio == 1 || 2" clearable placeholder="请选择" >
              <el-option
                v-for="item in options"
                :key="item.value"
                :value="item.value">
              </el-option>
            </el-select>
            <!-- 时间选择-->
            <div v-if="radio == 3">
              <div class="block">
                <span class="demonstration">开始时间</span>
                <el-date-picker
                  v-model="startTime"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
              <div class="block">
                <span class="demonstration">结束时间</span>
                <el-date-picker
                  v-model="endTime"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
            </div>

            <div class="qingkuang">
              这里写查询回来的情况
            </div>

          </div>
          <div class="center-middle">
            <div class="center-GIS">
              <p>GIS地图</p>
              <p>xx线工地视频信号接入</p>
            </div>
            <div class="tucnegqiehuan">
              <p>图层切换</p>
              <div>
                <el-radio v-model="ditu" label="1">卫星图</el-radio>
                <el-radio v-model="ditu" label="2">路网图</el-radio>
              </div>
            </div>
          </div>
          <div class="center-right">
            <p>请输入工地名称:</p>
            <div class="gongdisousuo">
              <el-input
                placeholder="请输入内容"
                v-model="input4">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
              <el-button icon="el-icon-search" type="primary">搜索</el-button>
            </div>
            <div class="site-info">这里展示查询到的工地信息,这里要看后端返回的数据，以及数据库存储了哪些信息</div>
          </div>
        </div>

        <!-- 底部的代码，分为左右-->
        <div class="bottom">
          <!-- 左边是消息通知-->
          <div class="bottom-left">
            <p>消息通知</p>
            <el-table
              :data="tableData"
              stripe
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="标题"
                width="180">
              </el-table-column>
              <el-table-column
                label="查看详情">
                <el-link type="primary">查看详情</el-link>
              </el-table-column>
            </el-table>

          </div>
          <!-- 右边是指标趋势-->
          <!-- TODO 1期先使用多简单的文字，2期考虑使用echart折线图来可视化数据-->
          <div class="bottom-right">
            <p>工地指标情况趋势</p>
            1期先使用多简单的文字，2期考虑使用echart折线图来可视化数据
          </div>
        </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data(){
    return{
      weather:'',
      options: [
        {
        value: '选项1',
        label: '类别1'
      }, {
        value: '选项2',
        label: '类别2'
      }, {
        value: '选项3',
        label: '类别3'
      }, {
        value: '选项4',
        label: '类别4'
      }],
      value: '',
      isvisable: true,
      radio: 1,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      startTime: '',
      endTime: '',
      ditu: '1',
      input4: '',
      tableData: [{
        date: '2016-05-02',
        name: '注意安全',
      }, {
        date: '2016-05-04',
        name: '天气变热',
      }, {
        date: '2016-05-01',
        name: '工具存取',
      }, {
        date: '2016-05-03',
        name: '人员调动安排',
      }],

    }


  },
  //mounted来异步执行weather
  mounted() {
    this.getWeather()
  },
  computed: {
    ...mapGetters([
      'name'
    ]),


  },
  methods: {
    getCurrentTime() {
      //获取当前时间并打印
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
      _this.gettime = yy + '/' + mm + '/' + dd + ' ' + hh + ':' + mf + ':' + ss;
      return _this.gettime;
    },
    getWeather() {
      this.$axios
        .get(
          "https://v0.yiketianqi.com/api?unescape=1&version=v61&appid=23718542 &appsecret=5Z6SpskU"//appid：23718542  appsecret：5Z6SpskU
        )
        .then(res => {
          // let datas = res.data.data[0];//下标为0即表示当天天气数据
           console.log(res.data);
           //console.log(res.data.city);
          this.weather = res.data
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
}
</script>

<style lang="scss" scoped>
.dashboard {

  &-text {
    font-size: 30px;
    line-height: 46px;
    text-align: center;
  }
  &-subtitle {
    font-size: 20px;
    line-height: 30px;
    text-align: right;
  }
}

.el-header{
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
}
.title-text {
  color: white;
  font-weight: bold;
  width: 500px;
  margin: auto;
  background-color: rgb(48,65,86);
  border-radius: 0 0 10px 10px;
}

.el-main {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 20px !important;
  text-align: left;
}
.center{
  display: flex;
  justify-content: space-between;
  height: 400px;
  line-height: 15px;


}
.center .center-left{
  width: 24%;
  padding-left: 10px;
  //border: 2px solid black;
  background-color: #E9EEF3;
  border-radius: 10px;
}

.center .center-left .qingkuang{
  height: 70%;
  padding-top: 5px;
}

.center .center-middle{
  width: 50%;
  padding-left: 10px;
  position: relative;
  background-color: #E9EEF3;
  border-radius: 10px;
}

.center .center-middle .tucnegqiehuan {
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-color: rgb(179,192,209);
}
.center .center-right{
  width: 24%;
  padding-left: 10px;
  background-color: #E9EEF3;
  border-radius: 10px;
}

.center .center-right .gongdisousuo{
  display: flex;
  justify-content: center;
}
.center .center-right .site-info{
  margin-top: 10px;
}

.bottom{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.bottom .bottom-left{
  width: 48%;
  //border: 3px solid lavenderblush;
  padding-left: 10px;
  background-color: #E9EEF3;
  border-radius: 10px;
}

.bottom .bottom-right{
  width: 48%;
  padding-left: 10px;
  background-color: #E9EEF3;
  border-radius: 10px;
}



</style>
