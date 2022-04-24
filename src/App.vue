<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>Money</h1>
      </div>

      <v-spacer></v-spacer>
      <v-btn icon @click="toListExpenses">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon @click="toAddExpense">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-content-copy</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

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
  },
});
</script>
