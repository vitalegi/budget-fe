import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ExpensesView from "../views/ExpensesView.vue";
import AddExpenseView from "../views/AddExpenseView.vue";
import UpdateExpenseView from "../views/UpdateExpenseView.vue";
import Expense from "@/expenses/models/Expense";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "ExpensesView",
    component: ExpensesView,
  },
  {
    path: "/add",
    name: "AddExpenseView",
    component: AddExpenseView,
  },
  {
    path: "/update",
    name: "UpdateExpenseView",
    component: UpdateExpenseView,
    props: (route: any) => ({ expense: route.query.expense }),
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
