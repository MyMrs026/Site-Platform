import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/allvideo',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'allvideo',
        component: () => import('@/views/allvideo/index.vue'),
        meta: { title: '监控选择', icon: 'table' }
      },
    ]
  },

  //事件
  {
    path: '/caseModule',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'caseModule',
        component: () => import('@/views/caseModule/index.vue'),
        meta: { title: '案件处理模块', icon: 'el-icon-s-platform' }
      }
    ]
  },

  {
    path: '/shigongweidang',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'shigongweidang',
        component: () => import('@/views/shigongweidang/index'),
        meta: { title: '施工围挡检测', icon: 'table' }
      },
    ]
  },

  {
    path: '/daoluyinghua',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'daoluyinghua',
        component: () => import('@/views/daoluyinghua/index'),
        meta: { title: '道路硬化', icon: 'table' }
      },
    ]
  },

  {
    path: '/wuliaofugai',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'daoluyinghua',
        component: () => import('@/views/wuliaofugai/index'),
        meta: { title: '物料堆放覆盖', icon: 'form' }
      }
    ]
  },

  {
    path: '/shifazuoye',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'shifazuoye',
        component: () => import('@/views/shifazuoye/index'),
        meta: { title: '现场湿法作业', icon: 'form' }
      }
    ]
  },

  {
    path: '/cheliangqingxi',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'cheliangqingxi',
        component: () => import('@/views/cheliangqingxi/index'),
        meta: { title: '出入车辆清洗', icon: 'form' }
      }
    ]
  },

  {
    path: '/videomanage',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'videomanage',
        component: () => import('@/views/video/index.vue'),
        meta: { title: '监控视频管理', icon: 'el-icon-s-platform' }
      }
    ]
  },



  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // 后面不用加#号了
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
