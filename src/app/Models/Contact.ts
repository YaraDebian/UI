export class Contact {
    Id: number;
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: number;

    constructor(obj: Contact = {} as Contact) {
        this.Id = obj.Id;
        this.FirstName = obj.FirstName;
        this.LastName = obj.LastName;
        this.Email = obj.Email;
        this.PhoneNumber = obj.PhoneNumber;
    }
}
