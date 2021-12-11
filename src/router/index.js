//1.导入插件
import Vue from "vue";
import VueRouter from 'vue-router'


//导入组件
const Home = () => import ('../views/home/Home')
const Music = () => import ('../views/music/Music')
const Profile = () => import ('../views/profile/Profile')
const Blog = () => import('../views/Blog')
const BlogTypes = () => import('../views/BlogTypes')
const BlogTags = () => import('../views/BlogTags')
const Archives = () => import('../views/archives/Archives')
const Login = () => import('../views/login/Login')
const Admin = () => import('../components/layout/Admin')
const AdminBlog = () => import('../views/admin/blogs/AdminBlog')
const AddBlog = () => import("../views/admin/blogs/AddBlog")
const AdminTags = () =>import("../views/admin/blogs/AdminTags")
const AdminTypes = () =>import("../views/admin/blogs/AdminTypes");

//2.使用插件
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/Type',
    component: BlogTypes
  },
  {
    path: '/music',
    component: Music
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/archives',
    component: Archives
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/blogTypes',
    component: BlogTypes
  },
  {
    path: '/blogTags',
    component: BlogTags
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/admin',
    component: Admin,
    children: [
      {
        path: 'add',
        component: AddBlog
      },
      {
        path: 'blog',//子路径没有/
        component: AdminBlog
      },
      {
        path: 'tags',
        component: AdminTags
      },
      {
        path: 'types',
        component: AdminTypes
      }

    ]
  }

]
//3.创建路由实例
const router = new VueRouter({
  routes,
   /*去掉路径中的#*/
  mode: "history"
})
//4.导出路由
export default router
