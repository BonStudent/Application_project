import { createRouter, createWebHistory } from "vue-router";
import firstpage from "../components/firstpage.vue";
import login from "../components/Login.vue"
import signup from "../components/Signup.vue"
import secondpage from "../components/secondpage.vue"
import dashboard from "../components/dashboard.vue"
import table from "../components/table.vue"

const routes = [
    { path: "/login", component: login },
    { path: "/first", component: firstpage },
    { path: "/signup", component:  signup},
    { path: "/secondpage", component:  secondpage},
    { path: "/dashboard", component:  dashboard},
    { path: "/table", component:  table},
    
];

const router = createRouter({
    history: createWebHistory(), // Corrected to call createWebHistory() function
    routes,
});

export default router;