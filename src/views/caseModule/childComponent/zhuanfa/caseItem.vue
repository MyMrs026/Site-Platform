<template>
  <div class="case-item">
    <el-image style="width: 230px; height: 150px" :src="src"></el-image>
    <div class="case-title">
      <el-checkbox v-model="checked1" label="事件名称"></el-checkbox>
    </div>

    <div class="case-detailInform">
      <p>事件编号:例2107191000020</p>
      <p>事件发生时间:例2024-06-21</p>
      <p>位置信息:如摄像头5</p>
    </div>
    <div class="button-area">
      <el-button size="mini">转发</el-button>
      <el-button size="mini">作废</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      src: "https://ts1.cn.mm.bing.net/th/id/R-C.69c62fa67c4f8f4da4a1d7b8cebe35dd?rik=2XT11UyIToVMHQ&riu=http%3a%2f%2fscijet.com%2fstatic%2fupload%2fimage%2f20220223%2f1645599013205210.jpg&ehk=Zsd7NytaAEV0249ezM2QGhlCRQeGmeTYfDmmrOGkb84%3d&risl=&pid=ImgRaw&r=0",
      checked1: "",
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
};
</script>
<style scoped>
.case-item {
  width: 260px;
  border: 1px solid #000;
  /*display: flex;*/
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  margin-bottom: 20px; /* 可选：添加底部间距 */
}
.case-title {
  width: 230px;
  margin-left: 10px;
}
.case-detailInform {
  font-size: 14px;
  margin-left: 10px;
}
.button-area {
  margin-left: 10px;
}
</style>
