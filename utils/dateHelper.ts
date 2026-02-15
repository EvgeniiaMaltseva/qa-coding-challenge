export class DateHelper {
    static getTodayDate() {
        const today = new Date();
        return {
            day: String(today.getDate()).padStart(2, '0'),
            month: String(today.getMonth() + 1).padStart(2, '0'),
            year: String(today.getFullYear())
        };
    }

    static getDateMinusYears(years: number) {
        const date = new Date();
        date.setFullYear(date.getFullYear() - years);
        return {
            day: String(date.getDate()).padStart(2, '0'),
            month: String(date.getMonth() + 1).padStart(2, '0'),
            year: String(date.getFullYear())
        };
    }
}