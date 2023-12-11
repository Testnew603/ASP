import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentDetails } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  baseUrl = "https://localhost:7152/api/";


  constructor(private http: HttpClient) { } 

  getStudentDetails() {
    let url = this.baseUrl + 'Student/GetStudentDetails';
    return this.http.get<StudentDetails[]>(url);
  }
}
