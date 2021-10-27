import { Contact } from "./Contact";

export class Log extends Contact{
    Id: number;
    ContactId: number;
    Field: string;
    Previous: string;
    New: string;
    Date: Date;

    constructor(obj: Log = {} as Log) {
        super();
        this.Id = obj.Id;
        this.ContactId = obj.ContactId;
        this.Field = obj.Field;
        this.Previous = obj.Previous;
        this.New = obj.New;
        this.Date =  obj.Date;
    }
}