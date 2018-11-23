import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

function PageComponent(name) {
    return {
        render: h => h('h3', `Hello from the ${name} page`)
    };
}

export default new Router({
    mode: 'history',
    routes: [{
            path: '/app/',
            component: PageComponent('Home'),
            name: 'home'
        },
        {
            path: '/app/about',
            component: PageComponent('About'),
            name: 'about'
        },
        {
            path: '/app/contact',
            component: PageComponent('Contact'),
            name: 'contact'
        }
    ]
});
