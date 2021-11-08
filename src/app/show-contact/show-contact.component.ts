import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { LogService } from '../log.service';
import { Contact } from '../Models/Contact';
import { Log } from '../Models/Log';

@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.css']
})
export class ShowContactComponent implements OnInit{

  
  ModalTitle: any;
  contacts: Contact[]=[];
  logs: Log[]=[];
  contact: Contact = new Contact;
  AddOrEdit: boolean = false;
  showLogs: boolean = false;
  phoneNumber: any;
  firstName : any;
  
  constructor(private contactService: ContactService, private logsService: LogService) { }

  ngOnInit(): void {
    this.refreshContacts();
  }

  addClick(){
    this.contact = {
      Id: 0,
      FirstName:"",
      LastName:"",
      Email:"",
      PhoneNumber: this.phoneNumber
    }
    this.ModalTitle = "Add Contact";
    this.AddOrEdit =  true;
    this.refreshContacts();
  }

  editClick(item: any){
    this.contact = item;
    this.ModalTitle = "Edit Contact";
    this.AddOrEdit = true;
    this.refreshContacts();
  }

  deleteClick(item: Contact){
    if(confirm("Are you sure you want to delete this contact? ")) {
    this.contact = item;
    this.contactService.deleteContact(this.contact.Id).subscribe(()=> {
      this.refreshContacts();
    });
    }
  }
 
  closeClick(event: any){
    this.AddOrEdit = false;
    this.showLogs = false;
    this.refreshContacts();
  }

  logsClick(item: Contact)
  {
    this.contact = item;
    this.ModalTitle = "Logs";
    this.logsService.getLogs(item.Id).subscribe(data =>{
      this.logs = data;
    });
    this.showLogs = true;
  }

  refreshContacts(){
    this.contactService.getAll().subscribe(data =>{
      this.contacts = data;
    });
  }

  Search(){
    if(this.firstName == ""){
      this.ngOnInit();
    } else {
      this.contacts = this.contacts.filter(res => res.FirstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase()));
    }
  }
}
