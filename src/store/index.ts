import Expense from "@/expenses/models/Expense";
import LocalStorageUtil from "@/utils/LocalStorageUtil";
import UuidUtil from "@/utils/UuidUtil";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    expenses: JSON.parse(LocalStorageUtil.getItem("expenses", "[]")).map(
      Expense.fromJson
    ),
  },
  mutations: {
    addExpense: (state: any, expense: Expense) => {
      (state.expenses as any).push(expense);
      LocalStorageUtil.setItem("expenses", JSON.stringify(state.expenses));
    },
    deleteExpense: (state: any, expense: Expense) => {
      state.expenses = (state.expenses as Expense[]).filter(
        (e: Expense) => !e.equals(expense)
      );
      LocalStorageUtil.setItem("expenses", JSON.stringify(state.expenses));
    },
    updateExpense: (state: any, expense: Expense) => {
      const newExpense = Expense.fromJson(JSON.parse(JSON.stringify(expense)));
      (state.expenses as any).push(newExpense);
      LocalStorageUtil.setItem("expenses", JSON.stringify(state.expenses));
    },
  },
  getters: {
    expenses(state: any): Expense[] {
      return state.expenses;
    },
  },
  actions: {},
  modules: {},
});
