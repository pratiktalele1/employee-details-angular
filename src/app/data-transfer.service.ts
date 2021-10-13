import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './IEmployee';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  /**
   * url for interaction between frontend and backend
   */
  private url:string='http://localhost:8080/service';
  constructor(private http:HttpClient) { }

  /**
   * 
   * @returns fetching all data from database using get http method
   */
  getEmployees() :Observable<UserData[]>{
    return this.http.get<UserData[]>(this.url);
  }

  /**
   * 
   * @param userData to store data into database using post http method
   * @returns 
   */
  enrollEmployee(userData:UserData): Observable <UserData[]>{
    return this.http.post<UserData[]>(this.url,userData);
  }

  /**
   * 
   * @param id to delete data from database according to employee id using delete http method
   * @returns 
   */
  removeEmployee(id:number):Observable<UserData[]>{
    return this.http.delete<UserData[]>(`${this.url}/${id}`);    
  }

  /**
   * 
   * @param id getting data from database according to id using get http method
   * @returns 
   */
  getDataById(id: any):Observable<UserData[]> {
   return this.http.get<UserData[]>(`${this.url}/${id}`);

  }

  /**
   * 
   * @param userData updating data to database according to id using put http method
   * @param id 
   * @returns 
   */
  updateById(userData:UserData,id:number): Observable <UserData[]>{
    return this.http.put<UserData[]>(`${this.url}/${id}`,userData);
  }

}
