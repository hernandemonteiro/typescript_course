export class DateFormat {
    static toLocale(date) {
        return date.toLocaleDateString();
    }
    static toDateObject(dateString) {
        const exp = /-/g;
        return new Date(dateString.replace(exp, ","));
    }
}
