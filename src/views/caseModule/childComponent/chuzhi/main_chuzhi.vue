<template>
  <div class="chuzhi">
    <div class="sidebar">
      <!-- 返回按钮 -->
      <div class="back-button">
        <button @click="goBack">返回</button>
      </div>

      <!-- 全选按钮 -->
      <div class="select-all">
        <input type="checkbox" v-model="selectAll" @change="selectAllItems" />
        <label>全选</label>
      </div>

      <!-- 侧边栏内容，滚动条 -->
      <div class="sidebar-content">
        <div class="sidebar-scroll">
          <div v-for="item in items" :key="item.id" class="case-item">
            <input type="checkbox" v-model="selectedItems" :value="item.id" />
            <caseItem2 />
          </div>
        </div>
      </div>
    </div>
    <div class="center-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="案件抓拍" name="first">
          <caseItem3 />
        </el-tab-pane>
        <el-tab-pane label="历史视频" name="second"> </el-tab-pane>
        <el-tab-pane label="实时监控" name="third"> </el-tab-pane>
      </el-tabs>
    </div>
    <div class="right-content">
      <div class="right-top">
        <h3>案件办理</h3>
        <div>办理状态：{{ status }}</div>
        <div>责任主体：{{ sub_toliability }}</div>
        <div>自动核查：{{ auto_inspect }}</div>
        <div class="right-bottom">
          <el-card class="box-card">
            <div>案件编号:{{ caseId }}</div>
            <div>处置时间:{{ disposeTime }}</div>
            <div>案件类型:{{ caseType }}</div>
            <div>相机名称:{{ cameraName }}</div>
            <div>位置信息:{{ positionInform }}</div>
            <BaiduMap style="height: auto"></BaiduMap>
            <div>转发类型:{{ transmitType }}</div>
            <div>处置人员:{{ personIncharge }}</div>
            <div>问题描述:{{ problemDetail }}</div>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="200字以内的处置意见(可选填)"
              v-model="disposeOpinion"
            >
            </el-input>
            <div class="button-area">
              <el-button type="primary" size="mini">通过</el-button>
              <el-button type="danger" size="mini">不通过</el-button>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import caseItem2 from "./caseItem_2.vue"; // 假设你的 caseItem2 组件路径和名称
import caseItem3 from "./caseItem_3.vue";
import BaiduMap from "@/components/baidumap/BaiduMap";

export default {
  components: {
    caseItem2,
    caseItem3,
    BaiduMap,
  },
  data() {
    return {
      items: Array.from({ length: 20 }, (_, index) => ({ id: index + 1 })),
      selectedItems: [],
      selectAll: false,
      activeName: "first",
      //案件办理部分
      status: "待核查",
      sub_toliability: "未关联",
      auto_inspect: "未通过",
      //案件信息部分(界面右中)
      caseId: "2107191000071",
      disposeTime: new Date(),
      caseType: "物料堆放",
      cameraName: "muck8",
      positionInform: "muck8",
      transmitType: "现场处置",
      personIncharge: "wyt",
      problemDetail: "",
      disposeOpinion:'',
    };
  },
  methods: {
    goBack() {
      // 返回按钮点击事件处理逻辑
      console.log("返回按钮被点击");
    },
    selectAllItems() {
      if (this.selectAll) {
        this.selectedItems = this.items.map((item) => item.id);
      } else {
        this.selectedItems = [];
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.chuzhi {
  display: flex;
  width: 100%;
}

.sidebar {
  width: 150px; /* 侧边栏固定宽度 */
  background-color: #f0f0f0;
  padding: 10px;
}

.back-button {
  margin-bottom: 10px;
}

.sidebar-content {
  height: 100vh; /* 侧边栏内容区域固定高度，超出部分滚动 */
  overflow-y: auto; /* 垂直滚动条 */
}

.sidebar-scroll {
  padding-right: 10px; /* 防止滚动条遮挡内容 */
}

.case-item {
  margin-bottom: 10px; /* 适当的组件间距 */
}

.caseItem2 {
  margin-left: 5px; /* 多选框后的组件间距 */
}

.center-content {
  width: 70%;
  padding: 20px;
}

#map {
  height: auto !important;
}
</style>
