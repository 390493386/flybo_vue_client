import Vue from 'vue'
import Router from 'vue-router'
import staticRoute from './staticRoute'
import whiteList from './whiteList'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: staticRoute
})
