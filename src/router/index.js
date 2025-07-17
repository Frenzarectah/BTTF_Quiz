import { createWebHistory, createRouter } from "vue-router";

import Quiz from "@/views/Quiz.vue";
import Home from "@/views/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE),
    routes: [
        {
            path:'/',
            component: Home
        },
        {
            path:'/quiz/:id',
            component: Quiz,
        },
    ]
})

export default router;