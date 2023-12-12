import { Component, Input, OnInit } from '@angular/core';
import { StudentDetails } from '../../../models/models';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {
  @Input() student: StudentDetails;

  constructor() {
    this.student = {   
        id: 0,
        firstName:  '',
        lastName: '',
        birthDate: '',
        gender: '',
        email: '',
        address: '',
        mobile: 0,
        qualification: '',
        documents: '',  
        domainId: {
          id: 0,
          mainDomain: '',
          subDomain: ''
        },
        password: '',
        status: '',
        profile: '',
    }
    }

  ngOnInit(): void {  }
}
