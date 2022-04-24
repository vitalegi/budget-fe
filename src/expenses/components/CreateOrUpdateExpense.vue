<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <DatePicker :value="date" @change="updateDate" />
      </v-col>
      <v-col cols="12">
        <v-select
          v-model="author"
          :items="authors"
          label="Author"
          @change="changeAuthor"
        ></v-select>
      </v-col>
      <v-col cols="12">
        <v-select
          v-model="category"
          :items="categories"
          label="Category"
          @change="changeCategory"
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
import DateUtil from "@/utils/DateUtil";
import LocalStorageUtil from "@/utils/LocalStorageUtil";
import ExpenseService from "@/expenses/ExpenseService";
import Expense from "@/expenses/models/Expense";
import NumberUtil from "@/utils/NumberUtil";

export default Vue.extend({
  name: "CreateOrUpdateExpense",
  components: { DatePicker },
  props: {
    defaultValue: Expense,
  },
  data: () => ({
    date: DateUtil.today(),
    expenseService: new ExpenseService(),
    author: LocalStorageUtil.getItem("expenses.create.author", ""),
    category: LocalStorageUtil.getItem("expenses.create.category", ""),
    amount: 0,
    description: "",
  }),
  computed: {
    categories(): string[] {
      return this.expenseService.getCategories();
    },
    authors(): string[] {
      return this.expenseService.getAuthors();
    },
    isValid(): boolean {
      return this.expenseService.isValidEntry(
        this.date,
        this.author,
        this.category,
        this.amount
      );
    },
  },
  methods: {
    changeAuthor(author: string): void {
      LocalStorageUtil.setItem("expenses.create.author", author);
    },
    changeCategory(category: string): void {
      LocalStorageUtil.setItem("expenses.create.category", category);
    },
    updateDate(date: string): void {
      this.date = date;
    },
    createExpense(): void {
      const expense = new Expense();
      expense.date = this.date;
      expense.author = this.author;
      expense.category = this.category;
      expense.amount = NumberUtil.asNumber(this.amount);
      expense.description = this.description;

      this.$emit("change", expense);
    },
    initValues(expense: Expense): void {
      this.date = expense.date;
      this.author = expense.author;
      this.category = expense.category;
      this.description = expense.description;
      this.amount = expense.amount;
    },
  },
  watch: {
    defaultValue: {
      handler(newValue, oldValue) {
        if (newValue) {
          this.initValues(newValue);
        }
      },
      deep: true,
    },
  },
  mounted(): void {
    if (this.defaultValue) {
      this.initValues(this.defaultValue);
    }
  },
});
</script>
