<template>
  <div class="sidebar">
    <div class="sidebar-content">
      <div
        class="sidebar-item"
        @click="
          showPage('待转发');
          showComponent('zhuanfa');
        "
        :class="{ active: currentPage === '待转发' }"
      >
        <i class="el-icon-s-promotion"></i>
        <span>待转发</span>
      </div>
      <div
        class="sidebar-item"
        @click="
          showPage('带处置');
          showComponent('chuzhi');
        "
        :class="{ active: currentPage === '带处置' }"
      >
        <i class="el-icon-document"></i>
        <span>待处置</span>
      </div>
      <div
        class="sidebar-item"
        @click="
          showPage('待核查');
          showComponent('hecha');
        "
        :class="{ active: currentPage === '待核查' }"
      >
        <i class="el-icon-document-checked"></i>
        <span>待核查</span>
      </div>
      <div
        class="sidebar-item"
        @click="
          showPage('已存档');
          showComponent('cundang');
        "
        :class="{ active: currentPage === '已存档' }"
      >
        <i class="el-icon-folder"></i>
        <span>已存档</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Siderbar",
  data() {
    return {
      currentPage: "待转发", // 用于存储当前选中的页面
    };
  },
  methods: {
    showPage(category) {
      // 更新当前选中的页面
      this.currentPage = category;
      console.log("显示的页面:", category);
    },
    showComponent(componentName) {
      this.$emit("show-component", componentName);
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: relative;
  top: 0;
  left: 100px;
  bottom: 0;
  width: 100px; /* 控制侧边栏宽度 */
  height: 95vh;
  background-color: #f1f2f4;
  color: #000;
  transition: transform 0.3s ease;
  transform: translateX(-100%);
}

.sidebar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px; /* 项目之间的垂直间距 */
  cursor: pointer;
}

.sidebar-item i {
  font-size: 24px;
}

.sidebar-item span {
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
}

.sidebar-header {
  padding: 10px;
  text-align: center;
  background-color: #555;
}
.sidebar-item.active {
  background-color: #ffffff; /* 点击后的背景色 */
}

.sidebar-content {
  padding: 10px;
}
</style>
