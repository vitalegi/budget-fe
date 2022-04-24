<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="expenses"
      :items-per-page="10"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon @click="updateExpense(item)" class="mr-2"> mdi-pencil </v-icon>
        <v-icon @click="deleteExpense(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Expense from "@/expenses/models/Expense";

export default Vue.extend({
  name: "ListExpenses",

  data: () => ({
    search: "",
    headers: [
      {
        text: "Date",
        align: "start",
        sortable: true,
        value: "date",
      },
      { text: "Author", value: "author" },
      { text: "Category", value: "category" },
      { text: "Amount", value: "amount" },
      { text: "Description", value: "description" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }),
  computed: {
    expenses(): Array<Expense> {
      return this.$store.getters.expenses;
    },
  },
  methods: {
    deleteExpense(expense: Expense): void {
      this.$store.commit("deleteExpense", expense);
    },
    updateExpense(expense: Expense): void {
      this.$router.push({
        name: "UpdateExpenseView",
        query: {
          expense: JSON.stringify(expense),
        },
      });
    },
  },
});
</script>
