// import Vue from 'vue'
import 'es6-promise/auto'
import { createApp } from './app'


import './main.css'
import 'element-ui/lib/theme-chalk/icon.css';
import 'element-ui/lib/theme-chalk/display.css';
import 'element-ui/lib/theme-chalk/alert.css';
'@ElementUI'
// import ProgressBar from './components/ProgressBar.vue'

// global progress bar
// const bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount()
// document.body.appendChild(bar.$el)

// a global mixin that calls `asyncData` when a route component's params change
//下面这个是在 组件复用的时候触发  /foo/2  到 /foo/3 组件复用 这个时候触发
// Vue.mixin({
//   beforeRouteUpdate (to, from, next) {
//     const { asyncData } = this.$options
//     if (asyncData) {
//       asyncData({
//         store: this.$store,
//         route: to
//       }).then(next).catch(next)
//     } else {
//       next()
//     }
//   }
// })

const { app, router, store } = createApp()

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

// wait until router has resolved all async before hooks
// and async components...
router.onReady(() => {
  // Add router hook for handling asyncData.
  // Doing it after initial route is resolved so that we don't double-fetch
  // the data that we already have. Using router.beforeResolve() so that all
  // async components are resolved.
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    let diffed = false
    // console.log(matched);
    // console.log(prevMatched);
    // nsole
    //确保不会重复取数据 预防 当前需要渲染的组件中包含上个组件中已经渲染的组件 导致 重复取数据的情况
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c))
    })
    // console.log(activated);
    const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _)
    if (!asyncDataHooks.length) {
      return next()
    }

    // bar.start()
    // console.log(asyncDataHooks);
    Promise.all(asyncDataHooks.map(hook => hook({ store, route: to })))
      .then(() => {
        // bar.finish()
        next()
      })
      .catch(next)
  })

  // actually mount to DOM
  app.$mount('#app')
})

// service worker
if ('https:' === location.protocol && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js')
}
