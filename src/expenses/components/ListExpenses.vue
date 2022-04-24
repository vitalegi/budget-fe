<template>
  <div>
    {{ expenses }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Expense from "@/expenses/models/Expense";

export default Vue.extend({
  name: "ListExpenses",

  data: () => ({
  }),
  computed: {
    expenses(): Array<Expense> {
      return this.$store.getters.expenses;
    },
  },
  methods: {},
});
</script>
