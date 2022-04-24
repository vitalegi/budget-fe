<template>
  <CreateOrUpdateExpense :defaultValue="expense" @change="updateExpense" />
</template>

<script lang="ts">
import Vue from "vue";
import ExpenseService from "@/expenses/ExpenseService";
import CreateOrUpdateExpense from "@/expenses/components/CreateOrUpdateExpense.vue";
import Expense from "@/expenses/models/Expense";

export default Vue.extend({
  name: "CreateExpense",
  components: { CreateOrUpdateExpense },
  props: {
    expense: Expense,
  },
  data: () => ({
    expenseService: new ExpenseService(),
  }),
  methods: {
    updateExpense(newValue: Expense): void {
      this.$store.commit("updateExpense", {
        old: this.expense,
        curr: newValue,
      });
      this.$router.push("/");
    },
  },
});
</script>
