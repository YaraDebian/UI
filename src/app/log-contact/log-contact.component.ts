import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LogService } from '../log.service';
import { Contact } from '../Models/Contact';
import { Log } from '../Models/Log';

@Component({
  selector: 'app-log-contact',
  templateUrl: './log-contact.component.html',
  styleUrls: ['./log-contact.component.css']
})
export class LogContactComponent implements OnInit {

  @Input() contact = new Contact;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  
  logs: Log[]=[];
  contactId: any;
  hasLogs: boolean = false;
  constructor(private logsService: LogService) { }

  ngOnInit(): void {
    this.contactId = this.contact.Id;
    this.logsService.getLogs(this.contact.Id).subscribe(data =>{
      this.logs = data;
      if(this.logs.length > 0)
        this.hasLogs = true;
    });
  }
}
