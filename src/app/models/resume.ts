export class Experience {
    fromDate: Date;
    toDate: Date;
    positionHeld: string;
    company: string;
    responsibilities: string[];

    constructor(fromDate: string, toDate: string, positionHeld: string, company: string, responsibilities: string[]) {
        this.fromDate = new Date(fromDate);;
        this.toDate = new Date(toDate);;
        this.positionHeld = positionHeld;
        this.company = company;
        this.responsibilities = responsibilities;
    }

    calculatedYears(): any {
        let monthsOfWorking = this.toDate.getMonth() - this.fromDate.getMonth() + (12 * (this.toDate.getFullYear() - this.fromDate.getFullYear()));

        //for 1 month
        if (monthsOfWorking == 1) {
            return monthsOfWorking + ' month';
        }
        // for months
        if (monthsOfWorking > 1 && monthsOfWorking <= 11) {
            return monthsOfWorking + ' months';
        }
        //for 1 year
        if (monthsOfWorking == 12) {
            return Math.round(monthsOfWorking / 12) + ' year';
        }
        //for 1year with 1 month
        if (monthsOfWorking == 13 && monthsOfWorking % 12 == 1) {
            let yearsOfWorking = Math.round(monthsOfWorking / 12);
            let monthsOfWorkingModulo = Math.round(monthsOfWorking % 12);
            return yearsOfWorking + ' year ' + monthsOfWorkingModulo + ' month'
        }
        //for 1year with months
        if (monthsOfWorking == 13 && monthsOfWorking % 12 > 1) {
            let yearsOfWorking = Math.round(monthsOfWorking / 12);
            let monthsOfWorkingModulo = Math.round(monthsOfWorking % 12);
            return yearsOfWorking + ' year ' + monthsOfWorkingModulo + ' months'
        }
        //for years with no months
        if (monthsOfWorking > 12 && monthsOfWorking % 12 == 0) {
            let yearsOfWorking = Math.round(monthsOfWorking / 12);
            return yearsOfWorking + ' years '
        }
        // for years & 1 month
        if (monthsOfWorking > 12 && monthsOfWorking % 12 == 1) {
            let yearsOfWorking = Math.round(monthsOfWorking / 12);
            let monthsOfWorkingModulo = Math.round(monthsOfWorking % 12);
            return yearsOfWorking + ' years ' + monthsOfWorkingModulo + ' month'
        }
        // for years & months
        if (monthsOfWorking >= 13 && monthsOfWorking % 12 >= 1) {
            let yearsOfWorking = Math.round(monthsOfWorking / 12);
            let monthsOfWorkingModulo = Math.round(monthsOfWorking % 12);
            return yearsOfWorking + ' years ' + monthsOfWorkingModulo + ' months'
        }

    }
}



