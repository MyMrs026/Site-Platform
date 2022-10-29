<template>

  <div class="mc-cont">

    <div class="videoBox"  style="margin-bottom: 30px">
      <video
        id="myVideo1"
        controls
        class="vjs-default-skin vjs-big-play-centered vjs-16-9 video-js"
        preload="auto"
        style="width: 712px;height:320px;object-fit: fill"
      >
      </video>
    </div>

    <div class="videoBox"  style="margin-bottom: 30px">
      <video
        id="myVideo2"
        controls
        class="vjs-default-skin vjs-big-play-centered vjs-16-9 video-js"
        preload="auto"
        style="width: 712px;height:320px;object-fit: fill"
      >
      </video>
    </div>

    <div class="videoBox"  style="margin-bottom: 30px">
      <video
        id="myVideo3"
        controls
        class="vjs-default-skin vjs-big-play-centered vjs-16-9 video-js"
        preload="auto"
        style="width: 712px;height:320px;object-fit: fill"
      >
      </video>
    </div>

  </div>
</template>

<script>
export default {
  name: 'test2',
  data() {
    return {
      list: []    //这里用来存放视频地址
    }
  },


    methods: {

      OpenVideo(truckLicenseNo,type){
        //我这里是车牌号的一个点击事件，从后台获取拉取视频地址，这部分替换自己业务
        TruckService.PlayVideo({
          //车牌号
          truckLicenseNo: truckLicenseNo,

        }, (success) => {

          if (success) {
            //请求视频成功
            //判断打开全部或单个
            if (type==='all'){
              //list中push视频地址
              this.list.push( {
                  src:'rtmp://192.144.134.83:19350/live/015049488761_1',
                  id:1,
                },
                {
                  src:'rtmp://192.144.134.83:19350/live/015049488761_1',
                  id:2,
                },
                {
                  src:'rtmp://192.144.134.83:19350/live/015049488761_1',
                  id:3,
                }
              )
            }else if (type==='one'){
              // videojs("myVideo1").reset();
              this.list.push( {
                src:'rtmp://192.144.134.83:19350/live/015049488761_1',
                id:1,
              })
            }else if(type==='two'){
              // videojs("myVideo2").reset();
              this.list.push( {
                src:'rtmp://192.144.134.83:19350/live/015049488761_1',
                id:2,
              })
            }else{
              // videojs("myVideo3").reset();
              this.list.push( {
                src:'rtmp://192.144.134.83:19350/live/015049488761_1',
                id:3,
              })
            }

            //返回true,拉流播放视频
            //从这儿开始循环地址并初始化video.js
            this.list.map((item,i)=>{

              let myPlayer = videojs('myVideo'+item.id, {
                sources:[{
                  type: "rtmp/flv",
                  src:item.src
                }],
                //属性可以去查中文文档
                controls: true,
                //自动播放属性,muted:静音播放
                autoplay: true,
                preload: "auto",
                textTrackDisplay: false,
                errorDisplay: false,
                controlBar: false,
                bigPlayButton: false,

              });
              //这里是video.js的监听事件，视频播放中，我延迟3秒执行修改视频窗口的样式
              myPlayer.on("play", function(){

                this.timer = setTimeout(()=>{   //设置延迟执行
                  console.log('延时3秒放大窗口');
                  debugger;
                  let btns = document.getElementById('myVideo'+item.id+'_Flash_api')
                  btns.style.height = "320px"
                  btns.style.width = "712px"
                },3000);

              });
            })

          }

        });

      },
    }
}
</script>

<style scoped>

</style>
