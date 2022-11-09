const NodeMediaServer = require('node-media-server');
const config = {
  // 开启一个端口为1935的rtmp服务和一个端口为85的http服务
  rtmp:{
    port:1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30
  },
  http:{
    port:85,
    allow_origin:'*'
  }
};
var nums = new NodeMediaServer(config);
nums.run();


// ffmpeg -i rtsp://admin:abc123456@192.168.1.102:554/Streaming/Channels/101?transportmode=unicast101 -c copy -f flv rtmp://localhost:1935/live/test

// node ./src/utils/index.js
