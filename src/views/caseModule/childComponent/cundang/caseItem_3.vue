<template>
  <div class="case-item3">
    <div class="pic-area">
      <el-card class="box-card">
        抓拍图
        <el-image :src="imgUrl"></el-image>
      </el-card>
      <el-card class="box-card">
        核查图
        <el-image :src="imgUrl"></el-image>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-card>
    </div>

    <el-timeline class="flow-area">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "caseItem3",
  components: {},
  data() {
    return {
      imgUrl:
        "https://ts1.cn.mm.bing.net/th/id/R-C.6b3d22e097b1f97b8d184d79885985d2?rik=jrdbHDXOnlKznA&riu=http%3a%2f%2fwww.sxyxh-lot.com%2fstorage%2f20221110%2f636c6dbbd5e5a.jpg&ehk=tYxW1rtXbgNtBlUBDsUeiic6UVtkhQtpa4khb5TyDX4%3d&risl=&pid=ImgRaw&r=0",
      activities: [
        {
          content: "告警构造开始",
          timestamp: "2024-06-01",
        },
        {
          content: "管理员 转发",
          timestamp: "2024-06-03",
        },
        {
          content:
            '<img src="https://www.corerain.com/public/uploads/images/20230406/5320f0ff0fcee633bde24e0ebad2e821.jpg" alt="现场处置图片"/>',
          timestamp: "2024-06-03",
        },
      ],
      //上传图片
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 上传图片函数
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
  computed: {},
};
</script>
<style scoped>
.pic-area{
  display: flex;
}
.flow-area{
  margin: 20px;
}
</style>
