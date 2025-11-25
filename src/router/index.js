import { createWebHistory, createRouter } from 'vue-router'
import SprintView from '@/pages/SprintView.vue'
import MainView from '@/pages/MainView.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainView
        },
        {
            path: '/sprint',
            component: SprintView
        }
    ]
})