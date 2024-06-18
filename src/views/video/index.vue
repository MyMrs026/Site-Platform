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
                :value="item.value"
              >
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
              end-placeholder="结束日期"
            >
            </el-date-picker>
            <el-button
              type="primary"
              icon="el-icon-search"
              style="margin-left: 16px"
              >检索</el-button
            >
            <!-- TODO 这个标签应该放在一个dialog对话框里 是否给出一个检索结果来，若果有点选播放，没有就弹出消息，视频时间已自动删除 -->
            <el-button type="primary" style="margin-left: 16px"
              >播放视频</el-button
            >
          </div>
          <div class="video-container">
            <!-- TODO 视频地址还没有处理 -->
            <video id="myVideo" class="video-js" muted>
              <source :src="video_url" type="application/x-mpegURL" />
            </video>
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
                :value="item.value"
              >
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
              end-placeholder="结束日期"
            >
            </el-date-picker>
            <!-- TODO 这个标签应该放在一个dialog对话框里还是？ 是否给出一个检索结果来，若果有点选播放，没有就弹出消息，视频时间已自动删除 -->
            <el-button type="success" style="margin-left: 16px"
              >下载视频<i class="el-icon-download el-icon--right"></i
            ></el-button>
          </div>
          <div class="video-container">
            <!-- TODO 视频地址还没有处理 -->
            <video id="myVideo2" class="video-js" muted>
              <source :src="video_url2" type="application/x-mpegURL" />
            </video>
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
                :value="item.value"
              >
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
              end-placeholder="结束日期"
            >
            </el-date-picker>
            <el-button
              type="danger"
              style="margin-left: 16px"
              @click="centerDialogVisible = true"
              >删除视频<i class="el-icon-delete el-icon--right"></i
            ></el-button>

            <el-dialog
              title="提示"
              :visible.sync="centerDialogVisible"
              width="30%"
              center
            >
              <span
                >该操作将删除该时间段监控视频内容，请谨慎操作，是否确定要删除该时间段监控内容？</span
              >
              <span slot="footer" class="dialog-footer">
                <el-button @click="open1">取 消</el-button>
                <el-button type="danger" @click="open2">确 定</el-button>
              </span>
            </el-dialog>
          </div>
          <div class="video-container">
            <!-- TODO 视频地址还没有处理 -->
            <video id="myVideo3" class="video-js" muted>
              <source :src="video_url3" type="application/x-mpegURL" />
            </video>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default {
  name: "index",
  data() {
    return {
      activeName: "first",
      value1: [new Date(2022, 10, 4, 10, 10), new Date(2022, 12, 4, 10, 58)],
      value2: [new Date(2022, 11, 8, 10, 10), new Date(2022, 12, 4, 17, 29)],
      value3: [new Date(2022, 11, 5, 10, 10), new Date(2022, 12, 4, 16, 10)],

      centerDialogVisible: false,
      options: [
        {
          value: "1001",
          label: "摄像头1",
        },
        {
          value: "1002",
          label: "摄像头2",
        },
        {
          value: "1003",
          label: "摄像头3",
        },
        {
          value: "1004",
          label: "摄像头4",
        },
      ],

      video_url:
        "http://60.222.243.227:7086/live/cameraid/1000394%240/substream/1.m3u8",
      video_url2:
        "http://60.222.243.227:7086/live/cameraid/1000434%240/substream/1.m3u8",
      video_url3:
        "http://60.222.243.227:7086/live/cameraid/1000437%240/substream/1.m3u8",
      video_url4:
        "http://60.222.243.227:7086/live/cameraid/1000439%240/substream/1.m3u8",
      value:
        "1001",
    };
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    open1() {
      (this.centerDialogVisible = false),
        this.$message({
          message: "取消删除",
          type: "success",
        });
    },
    open2() {
      (this.centerDialogVisible = false),
        this.$message({
          message: "删除成功",
          type: "warning",
        });
    },
    initVideo() {
      if (videojs.getPlayers()["myVideo"]) {
        videojs.getPlayers()["myVideo"].dispose();
      }
      if (videojs.getPlayers()["myVideo2"]) {
        videojs.getPlayers()["myVideo2"].dispose();
      }
      if (videojs.getPlayers()["myVideo3"]) {
        videojs.getPlayers()["myVideo3"].dispose();
      }
      //初始化视频方法
      let myPlayer = videojs(
        "myVideo",
        {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          autoplay: true,
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          //设置视频播放器的显示宽度（以像素为单位）
          width: "800px",
          //设置视频播放器的显示高度（以像素为单位）
          height: "400px",
        },
        function onPlayerReady() {}
      );
      let myPlayer2 = videojs(
        "myVideo2",
        {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          autoplay: true,
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          //设置视频播放器的显示宽度（以像素为单位）
          width: "800px",
          //设置视频播放器的显示高度（以像素为单位）
          height: "400px",
        },
        function onPlayerReady() {}
      );
      let myPlayer3 = videojs(
        "myVideo3",
        {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          autoplay: true,
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          //设置视频播放器的显示宽度（以像素为单位）
          width: "800px",
          //设置视频播放器的显示高度（以像素为单位）
          height: "400px",
        },
        function onPlayerReady() {}
      );
    },
    getUrl() {
      this.$axios.get(`/api/camera/list`).then((res) => {
        res = res.data;
        console.log(res);
        if (res.code == 200) {
          this.video_url = res.data[5].url;
          console.log(this.video_url);
        } else {
          this.$message({
            type: "error",
            message: res.message,
          });
        }
      });
      setTimeout(() => {
        this.initVideo();
      }, 1000);
    },
  },
  mounted() {
    // this.getUrl();
    this.initVideo();
  },
  computed: {
    selectedVideoUrl() {
      // 根据选择的值返回相应的视频链接
      switch (this.value) {
        case "1001":
          return this.video_url;
        case "1002":
          return this.video_url2;
        case "1003":
          return this.video_url3;
        case "1004":
          return this.video_url4;
        default:
          return ''; // 如果值不匹配，默认返回空链接
      }
    },
  },
};
</script>

<style scoped>
.block {
  margin-top: 16px;
  margin-bottom: 16px;
}
.demonstration {
  margin-left: 16px;
  margin-right: 16px;
}

.video-container {
  margin-left: 100px;
}
</style>
