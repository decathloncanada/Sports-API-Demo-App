import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sport from '@/components/Sports'
import PlacesMap from '@/components/PlacesMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sports',
      name: 'Sport',
      component: Sport
    },
    {
      path: '/map/:id',
      name: 'PlacesMap',
      component: PlacesMap,
      props: true
    }
  ]
})
