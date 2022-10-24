<template>
  <div class="dashboard-container">
    <div class="dashboard-text">xx县智慧工地监管系统</div>
    <div class="dashboard-subtitle">日期: {{getCurrentTime()}}</div>
    <div class="dashboard-subtitle">所在城市: {{weather.city}}  今日天气:{{weather.wea}}</div>
  <!--以下为Dashboard界面：label布局为大布局，container布局为小布局-->
  <!--中间三个模块为一组label布局-->
  <el-row>
    <!--      工地情况统计组件-->
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <el-container>
          <el-header height="100px">工地情况统计</el-header>
          <el-main height="200px">按处置类别、状态统计</el-main>
          <el-footer height="260px" class="banner-box-time">按时间统计</el-footer>
        </el-container>
      </div>
    </el-col>
    <!--      GIS地图组件-->
    <el-col :span="8">
      <div class="grid-content bg-purple">
          <el-container>
            <el-header height="460px">
              <p>GIS地图</p>
              <p>xx县工地视频输入信号</p>
            </el-header>
            <table border="1">
              <tr>
                <td>图层切换</td>
                <td>
                  <el-select v-model="value" filterable placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </td>
              </tr>
              <tr>
                <td><el-button>卫星图</el-button></td>
                <td><el-button>路网图</el-button></td>
              </tr>
            </table>
          </el-container>
      </div>
    </el-col>
    <!--      查找工地组件-->
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <el-container>
          <el-header height="100px">
            <el-row :gutter="20">
              <el-col :span="10">
                <div class="grid-content bg-purple" font-size="4px">
                  搜索条件(模糊查询)
                </div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
                </div>
              </el-col>
            </el-row>
          </el-header>
          <el-footer height="460px">
            <div>查找到工地后，显示工地相关信息，例如位置，在建项目等</div>
          </el-footer>
        </el-container>
      </div>
    </el-col>
  </el-row>
  <!--底部两个模块为一组label布局-->
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
      <el-row :gutter="1">
        <!--          消息提示组件-->
        <el-col :span="12">
          <div class="grid-content bg-purple">
            消息提示
            <ol>
              <li>XXXX</li>
              <li>XXXX</li>
              <li>XXXX</li>
              <li>XXXX</li>
            </ol>
          </div>
        </el-col>
        <!--          工地指标情况趋势组件-->
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <p>工地指标情况趋势</p>
            <div class="PMtext">PM2.5,PM10</div>
          </div>
        </el-col>
      </el-row>
    </div></el-col>
  </el-row>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data(){
    return{
      weather:'',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      input:'',
    }
  },
  //mounted来异步执行weather
  mounted() {
    this.getWeather()
  },
  computed: {
    ...mapGetters([
      'name'
    ])
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
  &-container {
    margin: 30px;
  }
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

.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
.maintext {
  height: 300px;
  font-size: 1px;
  -webkit-transform-origin-x:0;
  -webkit-transform:scale(0.90);
}
.PMtext{
  line-height: 100px;
  text-align: center;
}
.banner-box-time{
  display: flex;
  align-items: center;
  text-align: center;
}

// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}

//label样式
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  font-size: 1px;
  -webkit-transform-origin-x:0;
  -webkit-transform:scale(0.90);
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
//container布局样式
.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #F2F6FC;
  color: #333;
  align-items: center;
  line-height: 60px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

</style>
