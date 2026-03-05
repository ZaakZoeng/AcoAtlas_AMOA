import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/genome",
      name: "genome",
      component: () => import("../views/Genome.vue"),
    },
    {
      path: "/transcriptome",
      name: "transcriptome",
      component: () => import("../views/Transcriptome.vue"),
    },
    {
      path: "/communication",
      name: "communication",
      component: () => import("../views/Communication.vue"),
    },
    {
      path: "/cross-species",
      name: "cross-species",
      component: () => import("../views/CrossSpecies.vue"),
    },
    {
      path: "/download",
      name: "download",
      component: () => import("../views/Download.vue"),
    }
  ],
});

export default router;