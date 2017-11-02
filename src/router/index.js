import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import component2 from '@/components/second'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/comp2',
            name: 'comp2',
            component: component2
        }

    ]
})