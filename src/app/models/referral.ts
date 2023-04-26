export class Referral {
    name: string;
    position: string;
    address: string;
    phoneNumber: string;

    constructor(name: string, position: string, address: string, phoneNumber: string) {
        this.name= name;
        this.position= position;
        this.address= address;
        this.phoneNumber=phoneNumber;
    }
}