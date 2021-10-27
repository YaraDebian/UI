import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError} from 'rxjs';
import { Contact } from './Models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  readonly url = 'https://localhost:44333/api';

  constructor(private http:HttpClient) { }

  getAll(): Observable<Contact[]>{
    return this.http.get<any>(this.url + '/contact')
  }

  getContact(id: number): Observable<Contact>{
    return this.http.get<any>(this.url + '/contact/{id}')
  }

  addContact(contact: any): Observable<Contact>{
    return this.http.post<any>(this.url + '/contact', contact).pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: any){
     let errorMessage = '';

   if (error.error instanceof ErrorEvent) {
     // client-side error
     errorMessage = error.error.message;
   } else {
     // server-side error
     errorMessage = error.status + '\nMessage: Email address already exists, please choose another one.';
   }
   window.alert(errorMessage);
   return throwError(errorMessage);
 }
  

  updateContact(id: number, contact: Contact): Observable<Contact>{
    return this.http.put<any>(this.url + '/contact/' + id, contact)
  }

  deleteContact(id: number):Observable<Contact>{
    return this.http.delete<any>(this.url + '/contact/' + id)
  }
}
