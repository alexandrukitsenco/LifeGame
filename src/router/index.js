import { createMemoryHistory, createRouter } from 'vue-router'
import SprintView from '@/pages/SprintView.vue'
import MainView from '@/pages/MainView.vue'

export default createRouter({
    history: createMemoryHistory(),
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