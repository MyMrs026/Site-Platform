import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const state = {
  eventItem:[
    {
      eventId:'1',
      eventCategory:'施工围挡',
      eventDetail:'围挡的挡板有问题',
      eventPic:'https://l.b2b168.com/2021/10/25/10/202110251035535823484.jpg',
      eventTime: new Date(),
      eventSite:'工地1',
      eventPlace: '经度:110.973803°E; 纬度:35.594569°N',
      eventMonitor:'摄像头1'
    },
    {
      eventId:'2',
      eventCategory:'道路硬化',
      eventDetail:'道路部分区域出现硬化',
      eventPic:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F11185667%2Fee3854665db843fab5a759163cef4cf0.jpg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMTExODU2NjcvZWUzODU0NjY1ZGI4NDNmYWI1YTc1OTE2M2NlZjRjZjAuanBn%2Fsign%2F0f46c339338a2219efbe459bb207d2da.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1724811922&t=a1f204891876e4a6b2a8c859d66cbcb1',
      eventTime: new Date(),
      eventSite:'工地2',
      eventPlace: '经度:110.979997°E; 纬度:35.587983°N',
      eventMonitor:'摄像头2'
    },
    {
      eventId:'3',
      eventCategory:'物料堆放覆盖',
      eventDetail:'物料没有堆放完全',
      eventPic:'https://img1.baidu.com/it/u=3805702309,3154563788&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
      eventTime: new Date(),
      eventSite:'工地3',
      eventPlace: '经度:110.961403°E; 纬度:35.596438°N',
      eventMonitor:'摄像头3'
    },
    {
      eventId:'4',
      eventCategory:'现场施法作业',
      eventDetail:'施法作业设备工作异常',
      eventPic:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F62326217%2Febb5f754869441a4820aae039c7a5bf6.jpg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvNjIzMjYyMTcvZWJiNWY3NTQ4Njk0NDFhNDgyMGFhZTAzOWM3YTViZjYuanBn%2Fsign%2F1449da33fba7ebb9d170d3d7d01f574b.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1724812283&t=b455f48e38d03fd5c68f7d04654b0239',
      eventTime: new Date(),
      eventSite:'工地4',
      eventPlace: '经度:110.962438°E; 纬度:35.596580°N',
      eventMonitor:'摄像头4'
    },
    {
      eventId:'5',
      eventCategory:'出入车辆清洗',
      eventDetail:'车辆清洗设备异常',
      eventPic:'https://l.b2b168.com/2021/09/08/15/202109081557545819774.jpg',
      eventTime: new Date(),
      eventSite:'工地5',
      eventPlace: '经度:110.985200°E; 纬度:35.608859°N',
      eventMonitor:'摄像头5'
    }
  ]
}

const store = new Vuex.Store({
  state,
  modules: {
    state,
    app,
    settings,
    user
  },
  getters
//  其实里面的可以都删除了
})

export default store
