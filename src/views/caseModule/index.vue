<template>
  <div class="container">
    <Sidebar @show-component="showComponent"></Sidebar>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import Sidebar from "../caseModule/childComponent/Sidebar.vue";
import Zhuanfa from "./childComponent/zhuanfa/main_zhuanfa.vue";
import Chuzhi from "./childComponent/chuzhi/main_chuzhi.vue";
import Hecha from "./childComponent/hecha/main_hecha.vue";
import Cundang from "./childComponent/cundang/main_cundang.vue";
export default {
  name: "index",
  data() {
    return {
      currentComponent: "Zhuanfa",
      componentName: "",
    };
  },
  methods: {
    showComponent(componentName) {
      switch (componentName) {
        case "zhuanfa":
          this.currentComponent = "Zhuanfa";
          break;
        case "chuzhi":
          this.currentComponent = "Chuzhi";
          break;
        case "hecha":
          this.currentComponent = "Hecha";
          break;
        case "cundang":
          this.currentComponent = "Cundang";
          break;
        default:
          this.currentComponent = "Zhuanfa";
      }
    },
  },
  components: {
    Sidebar,
    Zhuanfa,
    Chuzhi,
    Hecha,
    Cundang,
  },
  created(){
   
  }
};
</script>

<style>
.container {
  display: flex;
}
</style>