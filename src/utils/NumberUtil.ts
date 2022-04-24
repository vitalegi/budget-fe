export default class NumberUtil {
  public static asNumber(value: any): number {
    if (typeof value === "number") {
      return value;
    }
    if (typeof value === "string") {
      return parseFloat(value);
    }
    throw Error(`Param is not a numer: ${value}`);
  }
}
