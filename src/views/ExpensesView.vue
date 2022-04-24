<template>
  <div class="expenses">
    <ListExpenses />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ListExpenses from "@/expenses/components/ListExpenses.vue";

export default Vue.extend({
  name: "ExpensesView",
  components: {
    ListExpenses,
  },
});
</script>
