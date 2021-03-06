// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../components/Login/Login.vue'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/msite',
            component:Msite,
            meta: {
                ShowList : true
            }
        },
        {
            path: '/order',
            component:Order,
            meta: {
                ShowList : true
            }
        },
        {
            path: '/profile',
            component:Profile,
            meta: {
                ShowList : true
            }
        },
        {
            path: '/search',
            component:Search,
            meta: {
                ShowList : true
            }
        },
        {
            path: '/',
            redirect:'/msite'
        },  {
            path: '/login',
            component:Login
        },
    ]
}) 