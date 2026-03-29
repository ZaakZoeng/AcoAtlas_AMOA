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
      path: "/gsp-cryo",
      name: "gsp-cryo",
      component: () => import("../views/GSPCryo.vue"),
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