import { createWebHistory, createRouter } from "vue-router";

import Math from '@/views/MathView.vue'
import Bio from '@/views/BioView.vue'
import Chem from '@/views/ChemView.vue'
import Home from "@/views/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE),
    routes: [
        {
            path:'/',
            component: Home
        },
        {
            path:'/Math',
            component: Math  
        },
        
        {
            path:'/Chemistry',
            component: Chem  
        },
        {
            path:'/Biology',
            component: Bio
        }
    ]
})

export default router;