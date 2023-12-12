import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NavigationService } from '../../../services/navigation.service';
import { DomainItem, DomainList, StudentDetails } from '../../../models/models';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrl: './student-main.component.css'
})
export class StudentMainComponent implements OnInit {
  studentForm!: FormGroup;
  @ViewChild('documentInput') documentInput:any;
  @ViewChild('profileInput') profileInput:any;

  educationOptions= [
    "10 th Pass",
    "HSC",
    "BA", "BCom", "BBA", "BCA",
    "MA", "MCom", "MBA", "MCA"  
  ]

  studentdetails: StudentDetails[] = [];
  studentToDisplay: StudentDetails[] = [];
  domainItem: DomainItem[] = [];
  message = '';

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
      qualification: this._fb.control('default'),
      domain: this._fb.control(''),
      profile: this._fb.control(''),
      password: this._fb.control(''),
      rpassword: this._fb.control(''),
    })
    //Get Student Details
    this._navigationService.getStudentDetails().subscribe((res) => {
     for(let student of res){
      this.studentdetails.unshift(student)
     }
      this.studentToDisplay = this.studentdetails;     
    });    

    //Get Domain List
    this._navigationService.getDomainList().subscribe((list:DomainList[]) => {
      for(let item of list){
        let present = false;
        for(let domainCategory of this.domainItem) {
          if(domainCategory.mainDomain === item.mainDomain){
            domainCategory.subDomains.push(item.subDomain);
            present = true;
          }
        }
        if(!present){
          this.domainItem.push({
            mainDomain: item.mainDomain,
            subDomains: [item.subDomain],
          })
        }
      }
    });
          
  }

  addStudent(){
    let studentDetails: StudentDetails = {
      id: 0,
      firstName: this.FirstName.value,
      lastName: this.LastName.value,
      birthDate: this.BirthDate.value,
      gender: this.Gender.value,
      email: this.Email.value,
      address: this.Address.value,
      mobile: this.Mobile.value,
      qualification: this.educationOptions[parseInt(this.Qualification.value)],
      domainId: this.Domain.value,
      documents: this.documentInput.nativeElement.files[0]?.name,    
      profile: this.documentInput.nativeElement.files[0]?.name,
      password: this.Password.value,
      status: '',
    };
    this._navigationService.addStudent(studentDetails).subscribe((res: any) => {
      this.message = res.toString();
    });
  }

  clearForm() {
    this.FirstName.setValue('');
    this.LastName.setValue('');
    this.BirthDate.setValue('');
    this.Gender.setValue('male');
    this.Email.setValue('');
    this.Address.setValue('');
    this.Mobile.setValue('');
    this.Qualification.setValue('');
    this.Domain.setValue('');
    this.documentInput.nativeElement.value = '';
    this.profileInput.nativeElement.value = '';
  }

  public get FirstName(): FormControl {
    return this.studentForm.get('firstname') as FormControl;
  }
  public get LastName(): FormControl {
    return this.studentForm.get('lastname') as FormControl;
  }
  public get BirthDate(): FormControl {
    return this.studentForm.get('birthdate') as FormControl;
  }
  public get Gender(): FormControl {
    return this.studentForm.get('gender') as FormControl;
  }
  public get Email(): FormControl {
    return this.studentForm.get('email') as FormControl;
  }
  public get Address(): FormControl {
    return this.studentForm.get('address') as FormControl;
  }
  public get Mobile(): FormControl {
    return this.studentForm.get('mobile') as FormControl;
  }
  public get Qualification(): FormControl {
    return this.studentForm.get('qualification') as FormControl;
  }
  public get Domain(): FormControl {
    return this.studentForm.get('domain') as FormControl;
  }
  public get Password(): FormControl {
    return this.studentForm.get('password') as FormControl;
  }
}
