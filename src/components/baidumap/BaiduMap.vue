<template>
  <div id="map">
    <div
      id="allmap"
      ref="allmap"
      :style="{ height: mapHeight, autosize: true }"
    ></div>
  </div>
</template>


<script>
export default {
  name: "BaiduMap",
  methods: {
    map() {
      let map = new window.BMap.Map(this.$refs.allmap); // 创建Map实例

      // var myIcon = new BMap.Icon(
      //   "/jsdemo/img/car.png",
      //   new BMap.Size(52, 26)
      // );

      var point1 = new BMap.Point(110.973803, 35.594569);
      map.centerAndZoom(point1, 13);
      var point2 = new BMap.Point(110.979997, 35.587983);
      map.centerAndZoom(point2, 13);
      var point3 = new BMap.Point(110.961403, 35.596438);
      map.centerAndZoom(point3, 13);
      var point4 = new BMap.Point(110.962438, 35.59658);
      map.centerAndZoom(point4, 13);
      var point5 = new BMap.Point(110.9852, 35.608859);
      map.centerAndZoom(point5, 13);
      var point6 = new BMap.Point(110.957967, 35.604335);
      map.centerAndZoom(point6, 13);

      let marker1 = new BMap.Marker(point1);
      // let marker1 = new BMap.Marker(point1, { icon: myIcon });
      let marker2 = new BMap.Marker(point2);
      let marker3 = new BMap.Marker(point3);
      let marker4 = new BMap.Marker(point4);
      let marker5 = new BMap.Marker(point5);
      let marker6 = new BMap.Marker(point6);
      // map.centerAndZoom(new window.BMap.Point(116.417854,39.921988), 15); // 初始化地图,设置中心点坐标和地图级别

      map.centerAndZoom("稷山县", 13);
      map.addControl(
        new window.BMap.MapTypeControl({
          // 添加地图类型控件
          mapTypes: [window.BMAP_NORMAL_MAP, window.BMAP_HYBRID_MAP],
        })
      );
      map.addOverlay(marker1);
      map.addOverlay(marker2);
      map.addOverlay(marker3);
      map.addOverlay(marker4);
      map.addOverlay(marker5);
      map.addOverlay(marker6);

      let opts1 = {
        width: 150,
        height: 80,
        title: "汾河文化广场",
      };
      let opts2 = {
        width: 150,
        height: 80,
        title: "汾河大桥",
      };
      let opts3 = {
        width: 150,
        height: 80,
        title: "民乐园三期",
      };
      let opts4 = {
        width: 150,
        height: 80,
        title: "华晨苑",
      };
      let opts5 = {
        width: 150,
        height: 80,
        title: "尚品文锦苑",
      };
      let opts6 = {
        width: 150,
        height: 80,
        title: "体育公园",
      };

      let infoWindow1 = new BMap.InfoWindow(
        "摄像机序列号:9JO1BE1PAZOEA57",
        opts1
      );
      let infoWindow2 = new BMap.InfoWindow(
        "摄像机序列号:9JO1BE1PAZA01A8",
        opts2
      );
      let infoWindow3 = new BMap.InfoWindow(
        "摄像机序列号:9TO1BE1PAZDOFF6",
        opts3
      );
      let infoWindow4 = new BMap.InfoWindow(
        "摄像机序列号:9JO1BE1PAZ97FF8",
        opts4
      );
      let infoWindow5 = new BMap.InfoWindow(
        "摄像机序列号:9JO1BE1PAZ041E1",
        opts5
      );
      let infoWindow6 = new BMap.InfoWindow(
        "摄像机序列号:9JO1BE1PAZC375F",
        opts6
      );

      marker1.addEventListener("click", function () {
        map.openInfoWindow(infoWindow1, point1); // 开启信息窗口
      });
      marker2.addEventListener("click", function () {
        map.openInfoWindow(infoWindow2, point2); // 开启信息窗口
      });
      marker3.addEventListener("click", function () {
        map.openInfoWindow(infoWindow3, point3); // 开启信息窗口
      });
      marker4.addEventListener("click", function () {
        map.openInfoWindow(infoWindow4, point4); // 开启信息窗口
      });
      marker5.addEventListener("click", function () {
        map.openInfoWindow(infoWindow5, point5); // 开启信息窗口
      });
      marker6.addEventListener("click", function () {
        map.openInfoWindow(infoWindow6, point6); // 开启信息窗口
      });

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
.BMap_bubble_title {
  font-size: 16px;
}
.BMap_bubble_content {
  font-size: 14px;
}
</style>
