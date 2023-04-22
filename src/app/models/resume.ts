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

    //include month's method
    calculatedYears(): string {
        var diff = (this.toDate.getTime() - this.fromDate.getTime()) / 1000;
        diff /= (60 * 60 * 24);
        let yearsOfWorking = Math.abs(Math.round(diff / 365.25));

        if (yearsOfWorking > 1) {
            return yearsOfWorking + ' years';
        }
        else
            return yearsOfWorking + ' year';
    }
}

