export class PersonalInfo {
    location: string;
    phoneNumber: string;
    emailAddress: string;
    linkedIn: string;
    workPermit: boolean;

    constructor(location: string, phoneNumber: string, emailAddress: string, linkedIn: string, workPermit: boolean) {
        this.location = location;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
        this.linkedIn = linkedIn;
        this.workPermit = workPermit;
    }

    workPermitToShow(): string {
        if (this.workPermit) {
            return "has work permit";
        }
        return '';
    }
}

