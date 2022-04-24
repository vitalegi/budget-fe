export default class Expense {
  date = "";
  author = "";
  category = "";
  amount = 0;
  description = "";

  public static fromJson(json: any): Expense {
    const out = new Expense();
    out.amount = json.amount;
    out.date = json.date;
    out.author = json.author;
    out.category = json.category;
    out.description = json.description;
    return out;
  }

  public equals(other: Expense): boolean {
    if (this.date !== other.date) {
      return false;
    }
    if (this.author !== other.author) {
      return false;
    }
    if (this.category !== other.category) {
      return false;
    }
    if (this.description !== other.description) {
      return false;
    }
    if (Math.abs(this.amount - other.amount) > 0.00001) {
      return false;
    }
    return true;
  }

  public clone(): Expense {
    return Expense.fromJson(JSON.parse(JSON.stringify(this)));
  }
}
