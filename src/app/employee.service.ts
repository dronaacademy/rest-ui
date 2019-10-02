import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http:HttpClient) { }

  public getEmployees(page: number) {
    return this.http.get("http://localhost:8080/api/employee?count=10&page=" + page);
  }
}
