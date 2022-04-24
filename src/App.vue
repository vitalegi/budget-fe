<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>Spese</h1>
      </div>

      <v-spacer></v-spacer>
      <v-btn icon @click="toListExpenses">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon @click="toAddExpense">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <CopyToClipboardBtn :value="exportExpenses()" />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import CopyToClipboardBtn from "@/components/shared/CopyToClipboardBtn.vue";
import Expense from "@/expenses/models/Expense";

export default Vue.extend({
  name: "App",
  components: { CopyToClipboardBtn },

  data: () => ({
    //
  }),
  methods: {
    toAddExpense(): void {
      if (this.$route.name !== "AddExpenseView") {
        this.$router.push("/add");
      }
    },
    toListExpenses(): void {
      if (this.$route.name !== "ExpensesView") {
        this.$router.push("/");
      }
    },
    exportExpenses(): string {
      const expenses = this.$store.getters.expenses as Expense[];
      return expenses.map((expense) => this.formatExpense(expense)).join("\n");
    },
    formatExpense(expense: Expense): string {
      return `${this.formatDate(expense.date)}\t${expense.amount}\t${
        expense.category
      }\t${expense.description}\t${expense.author}`;
    },
    formatDate(date: string): string {
      const values = date.split("-");
      return `${values[2]}/${values[1]}/${values[0]}`;
    },
  },
  mounted(): void {
    document.title = "Spese Coinquilini";
  },
});
</script>
