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
      const expenses = state.expenses as Expense[];
      const index = expenses.findIndex((e) => e.equals(expense));
      if (index !== -1) {
        expenses.splice(index, 1);
      }
      LocalStorageUtil.setItem("expenses", JSON.stringify(state.expenses));
    },
    updateExpense: (state: any, value: { old: Expense; curr: Expense }) => {
      const expenses = state.expenses as Expense[];
      const index = expenses.findIndex((e) => e.equals(value.old));
      if (index !== -1) {
        expenses[index] = value.curr;
        LocalStorageUtil.setItem("expenses", JSON.stringify(state.expenses));
      }
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
