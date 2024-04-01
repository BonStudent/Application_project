import { createRouter, createWebHistory } from "vue-router";
import firstpage from "../components/firstpage.vue";

const routes = [
    { path: "/", component: firstpage },
    { path: "/login", component: () => import("../components/Login.vue") },
    { path: "/signup", component: () => import("../components/Signup.vue") },
    { path: "/secondpage", component: () => import("../components/secondpage.vue") },
    { path: "/dashboard", component: () => import("../components/dashboard.vue") },
    { path: "/table", component: () => import("../components/table.vue") },
    { path: "/require_amtrd", component: () => import("../components/require_amtrd.vue") },
    { path: "/require_ep", component: () => import("../components/require_ep.vue") },
    { path: "/require_ftaa", component: () => import("../components/require_ftaa.vue") },
    { path: "/require_isag", component: () => import("../components/require_isag.vue") },
    { path: "/require_minahan", component: () => import("../components/require_minahan.vue") },
    { path: "/require_mpl", component: () => import("../components/require_mpl.vue") },
    { path: "/require_mpp", component: () => import("../components/require_mpp.vue") },
    { path: "/require_mpsa", component: () => import("../components/require_mpsa.vue") },
    { path: "/require_otp", component: () => import("../components/require_otp.vue") },
    { path: "/require_ssmc", component: () => import("../components/require_ssmc.vue") },


];

const router = createRouter({
    history: createWebHistory(), // Corrected to call createWebHistory() function
    routes,
});

export default router;