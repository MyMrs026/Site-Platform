<template>
  <!-- 在最新版的Chrome浏览器（以及所有以Chromium为内核的浏览器）中，已不再允许自动播放音频和视频。设置了autoplay属性也一样不能自动播放。 -->
  <!--  为video标签设置muted属性，使它静音，这样视频就能自动播放了，-->
  <video id="video1" height="300" width="400" controls="controls" autoplay muted></video>
</template>

<script>
import flvjs from '@/store/flv.min.js'
export default {
  name: 'index',
  methods:{
    handleUrl(){
      if(flvjs.isSupported()){
        var videoElement = document.getElementById('video1');
        var flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: 'http://localhost:85/live/test.flv'
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
      }
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

</style>
