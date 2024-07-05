<template>
  <div class="zhuanfa">
    <div class="search-area">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="案件编号">
          <el-input placeholder="请输入13位案件编号"></el-input>
        </el-form-item>
        <el-form-item label="案件时间">
          <div class="block">
            <el-date-picker
              v-model="value2"
              type="datetimerange"
              :picker-options="pickerOptions"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right"
            >
            </el-date-picker>
          </div>
        </el-form-item>

        <el-form-item>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="case-show">
      <div class="row" v-for="(rowItems, rowIndex) in rows" :key="rowIndex">
        <case-item class="col-md-3" v-for="(item, itemIndex) in rowItems" :key="itemIndex">
          <!-- 这里是每个 case-item 的内容 -->
           {{ item }}
        </case-item>
      </div>
    </div>
  </div>
</template>

<script>
import caseItem from "./caseItem.vue";
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      }, //时间快速选择
      value: "", //案件类型选择
      value2: "", //按键时间选择
      options: [
        {
          value: "选项1",
          label: "物料堆放",
        },
        {
          value: "选项2",
          label: "施工围挡",
        },
        {
          value: "选项3",
          label: "道路硬化",
        },
        {
          value: "选项4",
          label: "湿法作业",
        },
        {
          value: "选项5",
          label: "车辆清洗",
        },
      ],
      itemCount: 40, //总共有40个视频
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
  components: {
    caseItem,
  },
  computed: {
    rows() {
      const rows = [];
      const itemsPerRow = 4; // 每行展示4个视频
      const totalRows = Math.ceil(this.itemCount / itemsPerRow);

      for (let i = 0; i < totalRows; i++) {
        let row = [];
        for (let j = 0; j < itemsPerRow; j++) {
          let index = i * itemsPerRow + j;
          if (index < this.itemCount) {
            row.push(`视频 ${index + 1}`); // 替换为你的视频数据
          } else {
            break;
          }
        }
        rows.push(row);
      }

      return rows;
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
.col-md-3 {
  width: calc(25% - 15px);
  margin: 0 7.5px 15px; /* 左右间距7.5px，底部间距15px */
}
</style>
