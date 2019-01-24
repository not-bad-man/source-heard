import Vue from 'vue'
import Router from 'vue-router'

import stage from '@/components/stage'
import show from '@/components/show'
import init from '@/components/init'
import story from '@/components/story'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/stage',
      name: 'stage',
      component: stage
    },
    {
       path: '/show',
       name: 'show',
       component: show
    },
    {
       path: '/',
       name: 'init',
       component: init
    },
    {
       path: '/story',
       name: 'story',
       component: story
    }
  ]
})
