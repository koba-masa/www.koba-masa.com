import { createRouter, createWebHistory } from "vue-router";
import HelloWorldVue from "@/components/HelloWorld.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ name: "Hello World!", path: "/", component: HelloWorldVue }],
});

export default router;
