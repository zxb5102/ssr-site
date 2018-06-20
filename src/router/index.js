import Vue from 'vue'
import { bus } from "../util"
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// const UserAccount = () => import('./components/views/UserAccount.vue')
// const Index = ()=> import( '@/components/content/Index');
import Index from '@/components/content/Index'
const ProfessionType = () => import('@/components/content/ProfessionType')
const DesignHouse = () => import('@/components/content/DesignHouse')
const ActivitiesSalon = () => import('@/components/content/ActivitiesSalon')
const CompanyNews = () => import('@/components/content/CompanyNews')
const CompanySite = () => import('@/components/content/CompanySite')
const Entry = () => import('@/components/content/Entry')
const Login = () => import('@/components/content/Login')
const Register = () => import('@/components/content/Register')
const DesignDetail = () => import('@/components/content/designDetail')
const PcDesignDetail = () => import('@/components/content/PcDesignDetail')
const PdaDesignDetail = () => import('@/components/content/PdaDesignDetail')
const InfoIntro = () => import('@/components/content/InfoIntro')
const pdaInfoIntro = () => import('@/components/content/pdaInfoIntro')
const EntryForm = () => import('@/components/content/EntryForm')

Vue.use(Router)

// console.log(bus);
// <router-link to="/index">首页</router-link>
// <router-link to="/professionType">专业领域</router-link>
// <router-link to="/designHouse">设计所</router-link>
// <router-link to="/activitiesSalon">活动沙龙</router-link>
// <router-link to="/companyNews">公司新闻</router-link>
// <router-link to="/CompanySite">公司官网</router-link>
export function createRouter() {
  const router = new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/pdaInfoIntro',
        name: 'index',
        component: pdaInfoIntro
      },
      {
        path: '/entryForm',
        name: 'index',
        component: EntryForm
      },
      {
        path: '/infoIntro',
        name: 'index',
        component: InfoIntro
      },
      {
        path: '/',
        redirect: "/index"
      },
      {
        path: '/professionType',
        name: 'professionType',
        component: ProfessionType
      },
      {
        path: '/designHouse',
        name: 'designHouse',
        component: DesignHouse
      },
      {
        path: '/activitiesSalon',
        name: 'activitiesSalon',
        component: ActivitiesSalon
      },
      {
        path: '/companyNews',
        name: 'companyNews',
        component: CompanyNews
      },
      {
        path: '/entry',
        name: 'entry',
        component: Entry,
        children: [
          {
            path: '/',
            redirect: 'login'
          },
          {
            path: 'login',
            name: 'entry',
            component: Login
          },
          {
            path: 'register',
            name: 'entry',
            component: Register
          }
        ]
      },
      {
        path: '/companySite',
        name: 'companySite',
        component: CompanySite
      },
      {
        path: '/designDetail',
        name: 'designHouse',
        component: DesignDetail
      }, {
        path: '/pcDesignDetail',
        name: 'designHouse',
        component: PcDesignDetail
      }, {
        path: '/pdaDesignDetail',
        name: 'designHouse',
        component: PdaDesignDetail
      }
    ],
  })

  router.beforeEach((to, from, next) => {
    bus.$emit('navChange', to.name);
    next();
  });
  return router;
}


// export function createRouter() {
//   return new Router({
//     // mode: 'history',
//     fallback: false,
//     scrollBehavior: () => ({ y: 0 }),
//     routes: [
//       { path: '/test2', component: Test2 },
//       { path: '/*', component: Test },
//     ]
//   })
// }
// export default router;

// import Vue from 'vue'
// import Router from 'vue-router'

// Vue.use(Router)
// const Test = ()=>import('../components/Test.vue');
// const Test2 = ()=>import('../components/Test2.vue');

// export function createRouter () {
//   return new Router({
//     mode: 'history',
//     fallback: false,
//     scrollBehavior: () => ({ y: 0 }),
//     routes: [
//       { path: '/test2',  component: Test2 },
//       { path: '/*', component: Test },
//     ]
//   })
// }
