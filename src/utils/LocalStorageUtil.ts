export default class LocalStorageUtil {
  public static getItem(key: string, defaultValue: string): string {
    const value = window.localStorage.getItem(key);
    if (typeof value === "string") {
      return value;
    }
    return defaultValue;
  }
  public static setItem(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }
}
