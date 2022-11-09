<template>
  <!-- 在最新版的Chrome浏览器（以及所有以Chromium为内核的浏览器）中，已不再允许自动播放音频和视频。设置了autoplay属性也一样不能自动播放。 -->
  <!--  为video标签设置muted属性，使它静音，这样视频就能自动播放了，-->
  <div class="container">
    <div  v-for="(item, index) in list" :key="index">
      <video
        :id="'video' + item.id"
        style="width: 500px; height: 500px"
        controls
        autoplay
        muted
      ></video>
    </div>
  </div>
<!--  <video id="video1" height="300" width="400" controls="controls" autoplay muted></video>-->
</template>

<script>
import flvjs from '@/store/flv.min.js'
export default {
  name: 'index',
  data(){
    return{
      list:[
        {
          src: "http://localhost:85/live/test.flv",
          id: 0,
        },
        {
          src: "http://localhost:85/live/test.flv",
          id: 1,
        },
        {
          src: "http://localhost:85/live/test.flv",
          id: 2,
        },
        {
          src: "http://localhost:85/live/test.flv",
          id: 3,
        },
        {
          src: "http://localhost:85/live/test.flv",
          id: 4,
        },
        {
          src: "http://localhost:85/live/test.flv",
          id: 5,
        }
      ]
    }
  },
  methods:{
    handleUrl(){
      this.list.forEach((item, index) =>{
        if(flvjs.isSupported()){
          var videoElement = document.getElementById('video' + item.id);
          var flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: item.src
          });
          flvPlayer.attachMediaElement(videoElement);
          flvPlayer.load();
          flvPlayer.play();
        }
      })

    }
  },
  created() {
  },
  mounted() {
    this.handleUrl()
  }

}
</script>

<style scoped>
.container{
  display: flex;
  flex-wrap: wrap;


}

</style>
