<template>
  <div>
    <!-- 添加按钮组，用于切换视频个数 -->
    <div>
      <button @click="showVideos(9)">显示前9个视频</button>
      <button @click="showVideos(6)">显示前6个视频</button>
      <button @click="showVideos(4)">显示前4个视频</button>
    </div>

    <!-- 使用v-for循环创建多个视频元素 -->
    <div
      v-for="(url, index) in displayedVideos"
      :key="index"
      class="video-container"
    >
      <video :id="'myVideo_' + index" class="video-js" muted>
        <source :src="url" controls autoplay type="application/x-mpegURL" />
      </video>
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
      videoUrls: [
        "http://60.222.243.227:7086/live/cameraid/1000434%240/substream/1.m3u8",
        "http://60.222.243.227:7086/live/cameraid/1000435%240/substream/1.m3u8",
        "http://60.222.243.227:7086/live/cameraid/1000444%240/substream/1.m3u8",
        "http://60.222.243.227:7086/live/cameraid/1000437%240/substream/1.m3u8",
        "http://60.222.243.227:7086/live/cameraid/1000438%240/substream/1.m3u8",
        "http://60.222.243.227:7086/live/cameraid/1000439%240/substream/1.m3u8",
        "http://60.222.243.227:7086/live/cameraid/1000440%240/substream/1.m3u8",
        "http://60.222.243.227:7086/live/cameraid/1000441%240/substream/1.m3u8",
        "http://60.222.243.227:7086/live/cameraid/1000442%240/substream/1.m3u8",
        // 添加更多视频地址...
      ],
      displayedVideos: [
        "http://60.222.243.227:7086/live/cameraid/1000434%240/substream/1.m3u8",
        "http://60.222.243.227:7086/live/cameraid/1000435%240/substream/1.m3u8",
        "http://60.222.243.227:7086/live/cameraid/1000444%240/substream/1.m3u8",
        "http://60.222.243.227:7086/live/cameraid/1000437%240/substream/1.m3u8",
        "http://60.222.243.227:7086/live/cameraid/1000434%240/substream/1.m3u8",
        "http://60.222.243.227:7086/live/cameraid/1000435%240/substream/1.m3u8",
        "http://60.222.243.227:7086/live/cameraid/1000444%240/substream/1.m3u8",
        "http://60.222.243.227:7086/live/cameraid/1000437%240/substream/1.m3u8",
        "http://60.222.243.227:7086/live/cameraid/1000435%240/substream/1.m3u8",
      ],
      videosPerRow: 3, // 默认每行显示的视频数量
    };
  },
  computed: {
    videoRows() {
      const rows = [];
      for (let i = 0; i < this.displayedVideos.length; i += this.videosPerRow) {
        rows.push(this.displayedVideos.slice(i, i + this.videosPerRow));
      }
      return rows;
    },
  },
  methods: {
    initVideo() {
      this.displayedVideos.forEach((url, index) => {
        let videoId = "myVideo_" + index;

        if (videojs.getPlayers()[videoId]) {
          videojs.getPlayers()[videoId].dispose();
        }

        let myPlayer = videojs(
          videoId,
          {
            controls: true,
            autoplay: true,
            preload: "auto",
            width: "400px",
            height: "200px",
          },
          function onPlayerReady() {
            myPlayer.on("error", function () {
              console.error("视频加载失败", myPlayer.error());
            });
          }
        );
      });
    },
    showVideos(count) {
      this.displayedVideos = this.videoUrls.slice(0, count);
      // 根据显示的视频数量动态调整每行的视频数量
      if (count === 4) {
        this.videosPerRow = 2;
      } else {
        this.videosPerRow = 3;
      }
    },
  },
  mounted() {
    this.initVideo();
  },
};
</script>

<style scoped>
.video-container {
  margin-bottom: 20px;
}
</style>
