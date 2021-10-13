import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './IEmployee';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  
  private url:string='http://localhost:8080/service';
  constructor(private http:HttpClient) { }
  getEmployees() :Observable<UserData[]>{
    return this.http.get<UserData[]>(this.url);
  }

  enrollEmployee(userData:UserData): Observable <UserData[]>{
    return this.http.post<UserData[]>(this.url,userData);
  }

  removeEmployee(id:number):Observable<UserData[]>{
    return this.http.delete<UserData[]>(`${this.url}/${id}`);    
  }

  getDataById(id: any):Observable<UserData[]> {
   return this.http.get<UserData[]>(`${this.url}/${id}`);

  }

  updateById(userData:UserData,id:number): Observable <UserData[]>{
    return this.http.put<UserData[]>(`${this.url}/${id}`,userData);
  }

}
