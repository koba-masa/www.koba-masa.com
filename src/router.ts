import { createRouter, createWebHistory } from "vue-router";
import Top from "@/pages/Top.vue";
import NotFound from "@/pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: "www.koba-masa.com", path: "/", component: Top },
    { name: "404", path: "/:catchAll(.*)", component: NotFound },
  ],
});

export default router;
