import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/login", component: () => import("../components/Login.vue") },
    { path: "/signup", component: () => import("../components/Signup.vue") },
    
];

const router = createRouter({
    history: createWebHistory(), // Corrected to call createWebHistory() function
    routes,
});

export default router;