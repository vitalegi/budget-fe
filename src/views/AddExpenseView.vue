<template>
  <div class="expenses">
    <CreateExpense />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CreateExpense from "@/expenses/components/CreateExpense.vue";

export default Vue.extend({
  name: "AddExpenseView",
  components: {
    CreateExpense,
  },
});
</script>
