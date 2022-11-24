<template>
  <div class="cell">

    <div class="cell-player">
      <div :class="cellClass(i)" v-for = "i in cellCount" :key="i">
        <hls></hls>
      </div>

    </div>
    <div class="cell-tool">
      <div class="bk-button-group">
        <el-button @click="cellCount = 1" size="small">1</el-button>
        <el-button @click="cellCount = 4" size="small">4</el-button>
        <el-button @click="cellCount = 6" size="small">6</el-button>
        <el-button @click="cellCount = 9" size="small">9</el-button>
        <el-button @click="cellCount = 16" size="small">16</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import hls from '@/components/hls/hls'

export default {
  name: 'index',
  components: {
    hls
  },
  data() {
    return {

      cellCount: 1
    }
  },
  methods: {},
  computed: {
    cellClass() {
      return function (index) {
        switch (this.cellCount) {
          case 1:
            return ['cell-player-1']
          case 4:
            return ['cell-player-4']
          case 6:

            return ['cell-player-6']
          case 9:
            return ['cell-player-9']
          case 16:
            return ['cell-player-16']
          default:
            break;
        }
      }
    },
  },
}
</script>
<style>
.cell-tool {
  height: 40px;
  line-height: 30px;
  padding: 0 7px;
}
.cell-player {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 40px;
}
.cell-player-4 {
  height: 50% !important;
  box-sizing: border-box;
}

.cell-player-1 {
  width: 100%;
  box-sizing: border-box;
}

.cell-player-6 {
  width: 33.33%;
  height: 33.33% !important;
  box-sizing: border-box;
  justify-content: flex-start;
  padding: 0 30px;
  z-index: 2;
}
.cell-player-9 {
  width: 33.33%;
  height: 33.33% !important;
  box-sizing: border-box;
  padding: 0 80px !important;
}
.cell-player-16 {
  width: 25%;
  height: 25% !important;
  box-sizing: border-box;
}
.cell {
  display: flex;
  flex-direction: column;
  height: 100%;
}

</style>
