import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationService } from '../../../services/navigation.service';
import { StudentDetails } from '../../../models/models';
import { log } from 'console';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrl: './student-main.component.css'
})
export class StudentMainComponent implements OnInit {
  studentForm: FormGroup;

  educationOptions= [
    "10 th Pass",
    "HSC",
    "BA", "BCom", "BBA", "BCA",
    "MA", "MCom", "MBA", "MCA"  
  ]

  studentdetails: StudentDetails[] = [];
  studentToDisplay: StudentDetails[] = [];

  constructor (
    private _fb: FormBuilder,
    private _navigationService: NavigationService
    ) {
    this.studentForm = _fb.group({})

  }

  ngOnInit(): void {
    this.studentForm = this._fb.group({
      firstname: this._fb.control(''),
      lastname: this._fb.control(''),
      birthdate: this._fb.control(''),
      gender: this._fb.control('male'),
      email: this._fb.control(''),
      address: this._fb.control(''),
      mobile: this._fb.control(''),
      qualification: this._fb.control('default')
    })

    this._navigationService.getStudentDetails().subscribe((res) => {
     for(let student of res){
      this.studentdetails.unshift(student)
     }
      this.studentToDisplay = this.studentdetails;     
    });    
          
  }

  addStudent(){

  }
}
