<template>
  <CreateOrUpdateExpense @change="createExpense" />
</template>

<script lang="ts">
import Vue from "vue";
import ExpenseService from "@/expenses/ExpenseService";
import CreateOrUpdateExpense from "@/expenses/components/CreateOrUpdateExpense.vue";
import Expense from "@/expenses/models/Expense";

export default Vue.extend({
  name: "CreateExpense",
  components: { CreateOrUpdateExpense },

  data: () => ({
    expenseService: new ExpenseService(),
  }),
  methods: {
    createExpense(expense: Expense): void {
      this.$store.commit("addExpense", expense);
      this.$router.push("/");
    },
  },
});
</script>
