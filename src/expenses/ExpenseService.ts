import Expense from "@/expenses/models/Expense";
import { Store } from "vuex";

export default class ExpenseService {
  public getCategories(): string[] {
    return [
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
    ];
  }

  public getAuthors(): string[] {
    return ["Giorgio", "Federica"];
  }

  public isValidEntry(
    date: string,
    author: string,
    category: string,
    amount: number
  ): boolean {
    if (date.trim() === "") {
      return false;
    }
    if (author === "") {
      return false;
    }
    if (category === "") {
      return false;
    }
    if (Math.abs(amount) < 0.01) {
      return false;
    }
    return true;
  }
}
