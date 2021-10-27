import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Log } from './Models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  readonly url = 'https://localhost:44333/api';

  constructor(private http:HttpClient) { }

  getLogs(id: number): Observable<Log[]>{
    return this.http.get<any>(this.url + '/contact/log/' + id)
  }
}
