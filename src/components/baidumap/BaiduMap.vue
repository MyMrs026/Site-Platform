<template>
  <div id="map" >
    <div id="allmap" ref="allmap" :style="{height:mapHeight,autosize:true}"></div>
  </div>
</template>


<script>
export default {
  name: "BaiduMap",
  methods: {
    map() {
      let map = new window.BMap.Map(this.$refs.allmap); // 创建Map实例
      // map.centerAndZoom(new window.BMap.Point(116.417854,39.921988), 15); // 初始化地图,设置中心点坐标和地图级别
      map.centerAndZoom('稷山县',13);
      map.addControl(
        new window.BMap.MapTypeControl({
          // 添加地图类型控件
          mapTypes: [window.BMAP_NORMAL_MAP, window.BMAP_HYBRID_MAP],
        })
      );
      // map.setCurrentCity("运城"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
      //autosize(map);
    },
    initMapHeight() {
      var main = document.getElementById("map");
      main.style.height = window.innerHeight + "px";
    },
  },
  data() {
    return {
      mapHeight: 320 + "px",
    };
  },
  mounted() {
    this.initMapHeight();
    this.map();
    // window.onresize = () => {
    //   return (() => {
    //     this.mapHeight = window.innerHeight + 'px';
    //   })();
    // };
  },
};
</script>


<style>
#allmap {
  height: 35%;
  overflow: hidden;
}
</style>
