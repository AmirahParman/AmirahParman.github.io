export class jobDescription {
    fromDate: Date;
    toDate: Date;
    company: string;
    description: string;
    systems: string [];

    constructor(fromDate: string, toDate:string, company: string, description:string, systems: string[]){
        this.fromDate = new Date(fromDate);
        this.toDate = new Date(toDate);
        this.company = company;
        this.description = description;
        this.systems = systems;
        }
}