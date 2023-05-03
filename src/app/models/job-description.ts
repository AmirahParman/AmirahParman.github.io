export class jobDescription {
    id: string;
    fromDate: Date;
    toDate: Date;
    company: string;
    description: string;
    systems: string[];

    constructor(id: string, fromDate: string, toDate: string, company: string, description: string, systems: string[]) {
        this.id = id;
        this.fromDate = new Date(fromDate);
        this.toDate = new Date(toDate);
        this.company = company;
        this.description = description;
        this.systems = systems;
    }
    calculatedYears(): any {
        let monthsOfWorking = this.toDate.getMonth() - this.fromDate.getMonth() + (12 * (this.toDate.getFullYear() - this.fromDate.getFullYear()));
        let excessMonthsFromYear = monthsOfWorking % 12;

        let whenToShowMonths = excessMonthsFromYear != 0 && (monthsOfWorking > 1 || excessMonthsFromYear > 1);
        let whenToShowMonth = excessMonthsFromYear != 0 && (monthsOfWorking == 1 || excessMonthsFromYear == 1);

        let whenToShowYear = monthsOfWorking == 12 || (monthsOfWorking > 12 && excessMonthsFromYear == 0);
        let whenToShowYears = monthsOfWorking > 12;

        let result = '';
        let yearsOfWorking = Math.round(monthsOfWorking / 12);

        if (whenToShowYear) {
            result += `${yearsOfWorking} year`;
        }
        else if (whenToShowYears) {
            result += `${yearsOfWorking} years`;
        }

        if (whenToShowMonth) {
            if (monthsOfWorking == 1) {
                result += ` ${monthsOfWorking} month`;
            }
            else {
                result += ` ${excessMonthsFromYear} month`;
            }
        }
        else if (whenToShowMonths) {
            if (monthsOfWorking > 12) {
                result += ` ${excessMonthsFromYear} months`;
            }
            else {
                result += ` ${monthsOfWorking} months`;
            }
        }

        return result;
    }
}