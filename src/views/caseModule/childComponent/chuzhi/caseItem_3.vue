<template>
  <div class="case-item3">
    <el-image :src="imgUrl"></el-image>

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
        "https://www.corerain.com/public/uploads/images/20230406/5320f0ff0fcee633bde24e0ebad2e821.jpg",
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
          content: '<img src="https://www.corerain.com/public/uploads/images/20230406/5320f0ff0fcee633bde24e0ebad2e821.jpg" alt="现场处置图片"/>',
          timestamp: "2024-06-03",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
};
</script>
<style scoped>
.flow-area {
  margin:20px;
}
</style>
