import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ShowContactComponent } from './show-contact/show-contact.component';
import { AddEditContactComponent } from './add-edit-contact/add-edit-contact.component';
import { ContactService } from './contact.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogContactComponent } from './log-contact/log-contact.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ShowContactComponent,
    AddEditContactComponent,
    LogContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    DxDataGridModule,
    DxButtonModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
