import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/operatingcards",
    name: "OperatingCards",
    component: () => import("../views/OperatingCards.vue"),
  },
  {
    path: "/operatingcarddetails/:id/name/:card_name",
    name: "OperatingCardDetails",
    component: () => import("../views/OpCardDetails.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
