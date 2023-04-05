import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../consts';
@Injectable({
  providedIn: 'root'
})
export class FakeService {
  url = 'https://jsonplaceholder.typicode.com/posts/1';
  constructor(private http: HttpClient) { }

  getData():Observable<Data[]>{
    return this.http.get<Data[]>(this.url);
  }
}
