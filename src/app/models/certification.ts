export class Certifications {
    dateCertified: Date;
    courseNames: string[];

    constructor(dateCertified: string, courseNames: string[]) {
        this.dateCertified= new Date (dateCertified);
        this.courseNames= courseNames;
    }
}
