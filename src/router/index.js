import { createRouter, createWebHistory } from "vue-router";
import firstpage from "../components/firstpage.vue";

const routes = [
    { path: "/", component: firstpage },
    { path: "/login", component: () => import("../components/Login.vue") },
    { path: "/signup", component: () => import("../components/Signup.vue") },
    { path: "/secondpage", component: () => import("../components/secondpage.vue") },
    { path: "/dashboard", component: () => import("../components/dashboard.vue") },
    { path: "/table", component: () => import("../components/table.vue") },
    
];

const router = createRouter({
    history: createWebHistory(), // Corrected to call createWebHistory() function
    routes,
});

export default router;