import Expense from "@/expenses/models/Expense";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    expenses: [],
  },
  mutations: {
    addExpense: (state, expense: Expense) => {
      (state.expenses as any).push(expense);
    },
  },
  getters: {
    expenses(state): Expense[] {
      return state.expenses;
    },
  },
  actions: {},
  modules: {},
});
