<template>
  <div class="root-container">
      <div class="test-videojs">
        <div class="iframe-container">
           <iframe :src="flaskAppUrl" width="100%" height="600px"></iframe>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Videojs from "video.js"; // 引入Videojs
  export default {  // 只有一个 export default
    name: 'wuliaofugai',
  
    data() {
      return {
        flaskAppUrl: "http://172.18.2.60:5000/video_feed",
        nowPlayVideoUrl: "http://60.222.243.227:7086/live/cameraid/1000440%240/substream/1.m3u8",
        selectedFile: null,
        // 其他数据
      };
    },
  
    mounted() {
      this.init_data();
    },
  
    methods: {
      initVideo() {
        let options = {
          autoplay: true,
          controls: true,
          sources: [{ src: this.nowPlayVideoUrl, type: "application/x-mpegURL" }]
        };
        Videojs("videoPlayer", options);
      },
      init_data(){
        this.$axios.get(`/api/camera/list`).then(
          (res) => {
            res = res.data;
            console.log(res)
            if (res.code == 200){
              this.nowPlayVideoUrl = res.data[2].url;
              console.log(this.nowPlayVideoUrl)
            } else {
              this.$message({
                type:'error',
                message:res.message
              })
            }
          }
        );
        setTimeout(() =>{
          this.initVideo()
        },200)
      }
    }
  
  
  }
  </script>
  
  <style scoped>
  
  #videoPlayer {
    width: 500px;  /* 视频播放器宽度 */
    height: 300px;  /* 视频播放器高度 */
    margin: 50px auto;  /* 居中显示 */
  }
  
  .iframe-container iframe {
    width: 640px;  /* iframe 宽度与视频播放器一致 */
    height: 360px;  /* iframe 高度与视频播放器一致 */
    border: none;
    margin: auto;  /* 居中显示 */
  }
  
  .iframe-container {
    width: 100%;  /* iframe 容器宽度设置为 100% */
    display: flex;  /* 使用 Flexbox 进行布局 */
    justify-content: center;  /* 水平居中 */
    align-items: center;  /* 垂直居中 */
  }
  
  </style>