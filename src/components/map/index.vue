<template>
  <div class="amap-wrapper">
    <el-amap
      ref="map"
      :vid="'amapDemo'"
      :center="center"
      :zoom="zoom"
      :plugin="plugin"
      :events="events"
      class="amap-demo"
      style="height: 300px;width: 620px"
    >
      <el-amap-marker v-for="(u,i) in markers" :position="u.position" :key="i">
      </el-amap-marker>
      <el-amap-marker :position="[112.549248, 37.857014]" :icon="icon">
      </el-amap-marker>
    </el-amap>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      center: [112.549248, 37.857014],
      zoom: 12,
      position: [112.549248, 37.857014],
      icon: require('../../../public/favicon.png'),//自定义地图标记点图片
      events: {
        init(o){
          console.log(o.getCenter());
        },
        zoomchange: (e) => {
          console.log(e);
        },
        zoomend: (e) => {
          //获取当前缩放zoom值
          console.log(this.$refs.map.$$getInstance().getZoom());
          console.log(e);
        },
        click: e => {
          alert('map clicked')
        }
      },
      markers: [
        {
          position: [112.549248, 112.549248]
        },
        {
          position: [112.549248, 112.549248]
        }
      ],
      //使用其他组件
      plugin: [
        {
          pName: 'Scale',
          events: {
            init(instance) {
              console.log(instance)
            }
          }
        },
        {
          pName: 'ToolBar',
          events: {
            init(instance) {
              console.log(instance)
            }
          }
        }
      ],
    };
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
