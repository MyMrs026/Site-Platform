<template>
  <div class="dashboard-container">
    <div class="dashboard-text">xx县智慧工地监管系统</div>
    <div class="dashboard-subtitle">日期: {{getCurrentTime()}}</div>
    <div class="dashboard-subtitle">天气: {{weather.city}}:{{weather.wea}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data(){
    return{
      weather:''
    }
  },
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
    text-align: right;
  }
}
</style>
