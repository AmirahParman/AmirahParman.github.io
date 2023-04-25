export class PersonalInfo {
    location: string;
    phoneNumber: string;
    emailAddress: string;
    birthDate: Date;
    workPermit: boolean;

    constructor(location: string, phoneNumber: string, emailAddress: string, birthDate: string, workPermit: boolean) {
        this.location = location;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
        this.birthDate = new Date(birthDate);
        this.workPermit = workPermit;
    }

    workPermitToShow(): string {
        if (this.workPermit) {
            return "with work permit";
        }
        return '';
    }
}

