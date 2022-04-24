<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <DatePicker @change="updateDate" />
      </v-col>
      <v-col cols="12">
        <v-select v-model="author" :items="authors" label="Author"></v-select>
      </v-col>
      <v-col cols="12">
        <v-select
          v-model="category"
          :items="categories"
          label="Category"
        ></v-select>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="amount"
          label="Amount"
          type="number"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="description"
          label="Description"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn
          elevation="2"
          icon
          x-large
          outlined
          color="primary"
          @click="createExpense"
          :disabled="!isValid"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import DatePicker from "@/components/shared/DatePicker.vue";
import Expense from "@/expenses/models/Expense";

export default Vue.extend({
  name: "CreateExpense",
  components: { DatePicker },

  data: () => ({
    date: "",
    author: "",
    authors: ["Giorgio", "Federica"],
    category: "",
    categories: [
      "Affitto",
      "Spesa",
      "Benzina",
      "Bollette",
      "Manutenzione auto",
      "Eating out",
      "Trasporti",
      "Casa",
      "Gatto",
      "Svago",
      "Generali",
    ],
    amount: 0,
    description: "",
  }),
  computed: {
    isValid(): boolean {
      if (this.date.trim() === "") {
        return false;
      }
      if (this.author === "") {
        return false;
      }
      if (this.category === "") {
        return false;
      }
      if (Math.abs(this.amount) < 0.01) {
        return false;
      }
      return true;
    },
  },
  methods: {
    updateDate(date: string): void {
      this.date = date;
    },
    createExpense(): void {
      const expense = new Expense();
      expense.date = this.date;
      expense.author = this.author;
      expense.category = this.category;
      expense.amount = this.amount;
      expense.description = this.description;
      this.$store.commit("addExpense", expense);
    },
  },
});
</script>
