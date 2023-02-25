<template>
  <div>
    <h2 style="margin-left: 16px">监控视频管理</h2>
    <div>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">

        <!-- 监控视频播放 -->
        <el-tab-pane label="监控视频播放" name="first">
          <div>
            <span class="demonstration">请选择监控摄像头</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="block">
            <span class="demonstration">选择监控视频时间</span>
            <el-date-picker
              v-model="value1"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
            <el-button type="primary" icon="el-icon-search" style="margin-left: 16px">检索</el-button>
            <!-- TODO 这个标签应该放在一个dialog对话框里 是否给出一个检索结果来，若果有点选播放，没有就弹出消息，视频时间已自动删除 -->
            <el-button type="primary" style="margin-left: 16px">播放视频</el-button>
          </div>
          <div class="video-container">
            <!-- TODO 视频地址还没有处理 -->
            <video src="" width="500" height="300" autoplay controls ></video>
          </div>
        </el-tab-pane>

        <!-- 监控视频下载 -->
        <el-tab-pane label="监控视频下载" name="second">
          <div>
            <span class="demonstration">请选择监控摄像头</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="block">
            <span class="demonstration">选择监控视频时间</span>
            <el-date-picker
              v-model="value1"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
            <!-- TODO 这个标签应该放在一个dialog对话框里还是？ 是否给出一个检索结果来，若果有点选播放，没有就弹出消息，视频时间已自动删除 -->
            <el-button type="success" style="margin-left: 16px">下载视频<i class="el-icon-download el-icon--right"></i></el-button>
          </div>
          <div class="video-container">
            <!-- TODO 视频地址还没有处理 -->
            <video src="" width="500" height="300" autoplay muted controls ></video>
          </div>
        </el-tab-pane>

        <!-- 监控视频删除 -->
        <el-tab-pane label="监控视频删除" name="third">
          <div>
            <span class="demonstration">请选择监控摄像头</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="block">
            <span class="demonstration">选择监控视频时间</span>
            <el-date-picker
              v-model="value3"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
            <el-button type="danger" style="margin-left: 16px" @click="centerDialogVisible = true">删除视频<i class="el-icon-delete el-icon--right"></i></el-button>

            <el-dialog
              title="提示"
              :visible.sync="centerDialogVisible"
              width="30%"
              center>
              <span>该操作将删除该时间段监控视频内容，请谨慎操作，是否确定要删除该时间段监控内容？</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="open1">取 消</el-button>
                <el-button type="danger" @click="open2">确 定</el-button>
              </span>
            </el-dialog>

          </div>
          <div class="video-container">
            <!-- TODO 视频地址还没有处理 -->
            <video src="" width="500" height="300" autoplay controls ></video>
          </div>

        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      activeName: 'first',
      value1: [new Date(2022, 10, 4, 10, 10,), new Date(2022, 12, 4, 10, 58,)],
      value2: [new Date(2022, 11, 8, 10, 10,), new Date(2022, 12, 4, 17, 29,)],
      value3: [new Date(2022, 11, 5, 10, 10,), new Date(2022, 12, 4, 16, 10,)],

      centerDialogVisible: false,
      options: [{
        value: '1001',
        label: '摄像头1'
      }, {
        value: '1002',
        label: '摄像头2'
      }, {
        value: '1003',
        label: '摄像头3'
      }, {
        value: '1004',
        label: '摄像头4'
      }],
      value: '',
      /*url1: require('/public/source/manage/1-215.mp4'),
      url2: require('/public/source/manage/1-213-1.mp4'),
      url3: require('/public/source/manage/1-213-2.mp4'),*/
    }
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    open1() {
      this.centerDialogVisible = false,
        this.$message({
          message: '取消删除',
          type: 'success'
        });
    },
    open2() {
      this.centerDialogVisible = false,
        this.$message({
          message: '删除成功',
          type: 'warning'
        });
    },
  },
}
</script>

<style scoped>
.block{
  margin-top: 16px;
  margin-bottom: 16px;
}
.demonstration{
  margin-left: 16px;
  margin-right: 16px;

}

.video-container{
  margin-left: 100px;
}
</style>
