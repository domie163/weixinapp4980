import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import yundongdaka from '@/views/modules/yundongdaka/list'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import xiuxidaka from '@/views/modules/xiuxidaka/list'
    import yinshidaka from '@/views/modules/yinshidaka/list'
    import jiankangdaka from '@/views/modules/jiankangdaka/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import tizhilv from '@/views/modules/tizhilv/list'
    import yuyueyisheng from '@/views/modules/yuyueyisheng/list'
    import bmizhishu from '@/views/modules/bmizhishu/list'
    import yisheng from '@/views/modules/yisheng/list'
    import config from '@/views/modules/config/list'
    import yihuanjiaoliu from '@/views/modules/yihuanjiaoliu/list'
    import hesuanjiancedian from '@/views/modules/hesuanjiancedian/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/yundongdaka',
        name: '运动打卡',
        component: yundongdaka
      }
      ,{
	path: '/news',
        name: '公告资讯',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/xiuxidaka',
        name: '休息打卡',
        component: xiuxidaka
      }
      ,{
	path: '/yinshidaka',
        name: '饮食打卡',
        component: yinshidaka
      }
      ,{
	path: '/jiankangdaka',
        name: '健康打卡',
        component: jiankangdaka
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/tizhilv',
        name: '体脂率',
        component: tizhilv
      }
      ,{
	path: '/yuyueyisheng',
        name: '预约医生',
        component: yuyueyisheng
      }
      ,{
	path: '/bmizhishu',
        name: 'bmi指数',
        component: bmizhishu
      }
      ,{
	path: '/yisheng',
        name: '医生',
        component: yisheng
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/yihuanjiaoliu',
        name: '医患交流',
        component: yihuanjiaoliu
      }
      ,{
	path: '/hesuanjiancedian',
        name: '核酸检测点',
        component: hesuanjiancedian
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
