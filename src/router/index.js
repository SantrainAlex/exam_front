import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '@/stores/authStore'
import SignUp from "@/views/SignUpView.vue";
import HomeView from "@/views/HomeView.vue";


const router = createRouter({
    history: createWebHistory("/"),
    routes: [
        {
            path: '/login',
            name: 'login',
            component:LoginView
        },
        {
            path: '/signUp',
            name: 'signUp',
            component:SignUp
        },
        {
            path: '/',
            name: 'home',
            component:HomeView
        },
    ]
})

router.beforeEach((to,from,next)=>{
    const authStore = useAuthStore();

    authStore.checkLoginStatus()

    if(to.path === '/login' || to.path === '/signUp'){
        if(authStore.isLogged){
            next('/')
        }else{
            next();
        }
    }else{
        if(!authStore.isLogged){
            next('/login')
        }else{
            next()
        }
    }
})

export default router