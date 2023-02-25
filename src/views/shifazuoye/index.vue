<template>
  <div>
    <video id="myVideo" class="video-js" muted>
      <source :src="video_url" type="application/x-mpegURL">
    </video>
  </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
export default {
  name: 'index',
  data() {
    return {
      video_url: ""
    }
  },
  methods: {
    initVideo() {
      //初始化视频方法
      let myPlayer = videojs('myVideo', {
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: true,
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "800px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "400px"
      },function onPlayerReady(){

      });
    },
    getUrl(){
      this.$axios.get(`/api/camera/list`).then(
        (res) => {
          res = res.data;
          console.log(res)
          if (res.code == 200){
            this.video_url = res.data[5].url;
            console.log(this.video_url)
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



  },
mounted() {
    this.getUrl()

}

}

</script>

<style scoped>

</style>


