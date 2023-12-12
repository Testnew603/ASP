import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomainList, StudentDetails } from '../models/models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  baseUrl = "https://localhost:7152/api/";


  constructor(private http: HttpClient) { } 

  getDomainList() {
    let url = this.baseUrl + 'Student/GetDomainList';
    return this.http.get<any[]>(url).pipe(
      map((domains) => 
        domains.map((domain) => {
          let mappedDomain: DomainList = {
            id: domain.id,
            mainDomain: domain.mainDomain,
            subDomain: domain.subDomain,
          };
          return mappedDomain;
        })
      )
    );
  }

  getStudentDetails() {
    let url = this.baseUrl + 'Student/GetStudentDetails';
    return this.http.get<StudentDetails[]>(url);
  }

  addStudent(studentdetails: StudentDetails) {
    let url = this.baseUrl + 'Student/AddStudent';
    return this.http.post(url, studentdetails, {responseType: 'text'})
  }
}
