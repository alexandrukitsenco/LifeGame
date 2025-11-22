import { createMemoryHistory, createRouter } from 'vue-router'
import SprintView from '@/pages/SprintView.vue'

export default createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            component: SprintView
        }
    ]
})