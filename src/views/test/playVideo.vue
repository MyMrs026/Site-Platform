<template>
  <div class="player">
    <div>{{video.name}}</div>
    <video :id='"A"+video.index'
           style="width: 100%;"
           class="video-js vjs-default-skin vjs-big-play-centered  "> </video>
  </div>
</template>

<script>
export default {
  name: "playVideo",
  props: {
    video: {
      url: "",
      index:0,
    }
  },
  data() {return {}},
  mounted() {
    this.initVideoPlayer();
  },
  methods: {
    initVideoPlayer() {
      var that=this;
      var id="#A"+this.video.index;
      const currentInstance = that.$video(document.querySelector(id),{
        autoplay:true,
        controls:true
      }).src({
        src: 'rtsp://admin:abc123456@192.168.1.101:554/Streaming/Channels/101?transportmode=unicast101',
        type: 'application/x-mpegURL',
      })
    },
  }
}
</script>
<style scoped>
.player  {
  background-color: black;
  width: 100%;
  height: 100%;
  border: 1px solid white;
  color: white;
  text-align: center;
}
</style>
