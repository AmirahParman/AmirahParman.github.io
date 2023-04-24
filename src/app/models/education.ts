export class Education {
    fromDate: Date;
    toDate: Date;
    uniName: string;
    cgpa: number;
    achievements: string[];
    volunteerWorks: string[];
    subjects: string[];

    constructor(fromDate: string, toDate: string, uniName: string, cgpa: number, achievements: string[], volunteerWorks: string[],subjects: string[]) {
        this.fromDate = new Date(fromDate);
        this.toDate = new Date(toDate);
        this.uniName = uniName;
        this.cgpa = cgpa;
        this.achievements = achievements;
        this.volunteerWorks = volunteerWorks;
        this.subjects = subjects;
    }

}