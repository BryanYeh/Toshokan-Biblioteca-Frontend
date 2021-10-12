import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Home.vue"
import Auth from "@/pages/Auth.vue"
import Explore from "@/pages/Explore.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
