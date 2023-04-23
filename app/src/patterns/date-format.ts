import { logOfExecutionTime } from "./execution-time-decorator.js";

export class DateFormat {
  public static toLocale(date: Date): string {
    return date.toLocaleDateString();
  }

  public static toDateObject(dateString: string): Date {
    const exp = /-/g;
    return new Date(dateString.replace(exp, ","));
  }
}
