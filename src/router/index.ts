import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ExpensesView from "../views/ExpensesView.vue";
import AddExpenseView from "../views/AddExpenseView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "ExpensesView",
    component: ExpensesView,
  },{
    path: "/add",
    name: "AddExpenseView",
    component: AddExpenseView,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
