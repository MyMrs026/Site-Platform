<template>
  <div class="case-item">
    <el-image style="width: 230px; height: 150px" :src="eventItem.eventPic"></el-image>
    <div class="case-title">
      <el-checkbox v-model="checked1" label="事件名称"></el-checkbox>
    </div>

    <div class="case-detailInform">
      <p>事件编号:{{eventItem.eventId}}</p>
      <p>事件类别:{{eventItem.eventCategory}}</p>
      <p>事件详情:{{eventItem.eventDetail}}</p>
      <p>事件发生时间:{{eventItem.eventTime}}</p>
      <p>工地名称:{{eventItem.eventSite}}</p>
      <p>发生位置:{{eventItem.eventPlace}}</p>
      <p>监控编号:{{eventItem.eventMonitor}}</p>
    </div>
    <div class="button-area">
      <el-button size="mini" @click="dialogZhuanfaVisible = true"
        >转发</el-button
      >
      <el-button size="mini" @click="dialogZuofeiVisible = true"
        >作废</el-button
      >

      <el-dialog title="转发" :visible.sync="dialogZhuanfaVisible">
        <el-form>
          <el-form-item>
            <el-radio-group v-model="radio">
              <el-radio :label="3">通知修改</el-radio>
              <el-radio :label="6">现场处置</el-radio>
              <el-radio :label="9">业务系统</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <div style="color: red">案件返工、未关联或批量操作时禁止执行</div>
          </el-form-item>
          <el-form-item>
            <div>处理人：</div>
            <el-select v-model="value_renyuan" placeholder="请选择处置人员">
              <el-option
                v-for="item in options_renyuan"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogZhuanfaVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogZhuanfaVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>

      <el-dialog title="作废" :visible.sync="dialogZuofeiVisible">
        <el-form>
          <el-form-item>
            <div>作废原因</div>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="200字以内的作废原因(可选填)"
              v-model="textarea_1"
            >
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogZuofeiVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogZuofeiVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
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
      dialogZhuanfaVisible: false,
      dialogZuofeiVisible: false,
      formLabelWidth: "120px",
      radio: 3,
      options_renyuan: [
        {
          value: "选项1",
          label: "张三",
        },
        {
          value: "选项2",
          label: "李四",
        },
        {
          value: "选项3",
          label: "王五",
        },
        {
          value: "选项4",
          label: "赵六",
        },
      ],
      value_renyuan: "",
      textarea_1: ""
    };
  },
  props:{
    eventItem:Object,
    required:true
  },
  created() {
   
  },
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
