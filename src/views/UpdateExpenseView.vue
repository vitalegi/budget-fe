<template>
  <div class="expenses">
    <UpdateExpense :expense="expenseValue()" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import UpdateExpense from "@/expenses/components/UpdateExpense.vue";
import Expense from "@/expenses/models/Expense";

export default Vue.extend({
  name: "UpdateExpenseView",
  components: {
    UpdateExpense,
  },
  props: {
    expense: String,
  },
  methods: {
    expenseValue(): Expense {
      return Expense.fromJson(JSON.parse(this.expense));
    },
  },
});
</script>
