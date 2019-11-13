import Vue from 'vue'
import VueRouter from 'vue-router'
// 配置好路由   路由懒加载
const Layout = () => import('@/views/layout')
const Home = () => import('@/views/home/index')
const Question = () => import('@/views/question/index')
const Video = () => import('@/views/video/index')
const User = () => import('@/views/user/index')
const UserProfile = () => import('@/views/user/profile')
const UserChat = () => import('@/views/user/chat')
const Login = () => import('@/views/user/login')
const Search = () => import('@/views/search/index')
const SearchResult = () => import('@/views/search/result')
const Article = () => import('@/views/home/article')

Vue.use(VueRouter)
// 配置路由
const routes = [{
  path: '/',
  component: Layout,
  children: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/question',
    name: 'question',
    component: Question
  },
  {
    path: '/video',
    name: 'video',
    component: Video
  },
  {
    path: '/user',
    name: 'user',
    component: User
  }
  ]
},
{
  path: '/user/profile',
  name: 'user-profile',
  component: UserProfile
},
{
  path: '/user/chat',
  name: 'user-chat',
  component: UserChat
},
{
  path: '/login',
  name: 'login',
  component: Login
},
{
  path: '/search',
  name: 'search',
  component: Search
},
{
  path: '/search/result',
  name: 'search-result',
  component: SearchResult
},
{
  path: '/article',
  name: 'article',
  component: Article
}
]
const router = new VueRouter({
  routes
})

export default router
