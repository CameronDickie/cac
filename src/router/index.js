import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const NotFound = { template: "<div>Page not found</div>" };

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    //holding off on development of divestment for the time being - will be released at the end of september
    {
        path: '/divestment',
        name: 'Divestment',
        component: () => 
            import ('../views/Divestment.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => 
            import ('../views/Contact.vue')
    },
    { path: '*', component: NotFound }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router