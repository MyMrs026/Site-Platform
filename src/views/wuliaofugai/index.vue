<template>
  <div class="test-videojs">
    <video id="videoPlayer" class="video-js" muted></video>
  </div>
</template>

<script>
import Videojs from "video.js"; // 引入Videojs
export default {
  name: 'wuliaofugai',

  components:{
  },
  data() {
    return {
      nowPlayVideoUrl: "http://60.222.243.227:7086/live/cameraid/1000009$0/substream/2.m3u8"
    };
  },
  mounted() {
    // this.initVideo(this.nowPlayVideoUrl);
    this.getUrl()
  },
  methods: {
    initVideo(nowPlayVideoUrl) {
      // 这些options属性也可直接设置在video标签上，见 muted
      let options = {
        autoplay: true, // 设置自动播放
        controls: true, // 显示播放的控件
        sources: [
          // 注意，如果是以option方式设置的src,是不能实现 换台的 (即使监听了nowPlayVideoUrl也没实现)
          {
            src: nowPlayVideoUrl,
            type: "application/x-mpegURL" // 告诉videojs,这是一个hls流
          }
        ]
      };
      // videojs的第一个参数表示的是，文档中video的id
      const myPlyer = Videojs("videoPlayer", options, function onPlayerReady() {
        console.log("onPlayerReady 中的this指的是：", this); // 这里的this是指Player,是由Videojs创建出来的实例
        console.log(myPlyer === this); // 这里返回的是true
      });
    },
    getUrl(){
      this.$axios.get(`/api/camera/list`).then(
        (res) => {
          res = res.data;
          console.log(res)
          if (res.code == 200){
            this.nowPlayVideoUrl = res.data[3].url;
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
        this.initVideo(this.nowPlayVideoUrl)
      },200)
    },
  }


}
</script>

<style scoped>

#videoPlayer {
  width: 500px;
  height: 300px;
  margin: 50px auto;
}

</style>
