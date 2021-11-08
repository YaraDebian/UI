import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../Models/Contact';
import { ContactService } from '../contact.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit {

  @Input() contact = new Contact;

  contactId: any;
  firstName: any;
  lastName: any;
  email: any;
  phoneNumber: any;
  isValid: boolean = false;

  addOrEdit = new FormGroup({
    firstName: new FormControl(this.contact.Email, Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required)
  })
  constructor(private service: ContactService) { }

  ngOnInit(): void {
    this.contactId = this.contact.Id;
    this.firstName = this.contact.FirstName;
    this.lastName = this.contact.LastName;
    this.email = this.contact.Email;
    this.phoneNumber = this.contact.PhoneNumber;
    }

    get FirstName(){return this.addOrEdit.get('firstName')}
    get LastName(){return this.addOrEdit.get('lastName')}
    get Email(){return this.addOrEdit.get('email')}
    
    get PhoneNumber(){return this.addOrEdit.get('phoneNumber')}
    
    addContact(event: any){
      this.isValid = false;
      var newContact = new Contact();
      newContact.Id = this.contactId;
      newContact.FirstName = this.firstName;
      newContact.LastName = this.lastName;
      newContact.Email = this.email;
      newContact.PhoneNumber = this.phoneNumber;
      this.validate();
      if(this.isValid && newContact.PhoneNumber != 0)
      {
        this.service.addContact(newContact).subscribe();
        location.reload();
      }
      else alert("Please fill all the required fields.")
    }

    updateContact(event: any){
      this.isValid = false;
      var contact = new Contact();
      contact.Id = this.contactId;
      contact.FirstName = this.firstName;
      contact.LastName = this.lastName;
      contact.Email = this.email;
      contact.PhoneNumber = this.phoneNumber;
      debugger
      this.validate();
      if(this.isValid && contact.PhoneNumber != 0)
      {
        this.service.updateContact(contact.Id, contact).subscribe();
        location.reload();
      }
      else alert("Please fill all the required fields.")
    }

    validate(){
      let inputFeilds = document.querySelectorAll("input");
      const validInputs = Array.from(inputFeilds).filter( input => input.value !== "");
      this.isValid = validInputs.length < 4 ? false : true;
    }
}
