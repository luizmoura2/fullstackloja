import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/home/Home.vue";
import AdminPages from "@/components/admin/AdminPages.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "AadminPages",
    component: AdminPages,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;