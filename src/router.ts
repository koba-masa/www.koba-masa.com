import { createRouter, createWebHistory } from "vue-router";
import Top from "@/pages/Top.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ name: "www.koba-masa.com", path: "/", component: Top }],
});

export default router;
