import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/ui-models/student.model';
import { GenderService } from 'src/app/services/gender.service';
import { Gender } from 'src/app/models/ui-models/gender.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit{
 studentId : string | null | undefined
 student : Student ={
  id:' ',
  firstName :'',
  lastName : '',
  dateOfBirth :'',
  email : '',
  mobile : 0 ,
  profileImageUrl : '',
  genderId : '',
  gender :{
    id: '',
    description : ''
  },
  address :{
    id:'' ,
    physicalAddress : '',
    postalAddress : ''
  }
 };
   isNewStudent = false;
    header ='';
    genderList : Gender[] = [] ;
  constructor(private readonly studentService : StudentService ,
    private readonly route:ActivatedRoute,
    private readonly genderService : GenderService,
    private snackbar : MatSnackBar , private router : Router)
  {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) =>{
        this.studentId =params.get('id'); //to fetch

        if(this.studentId)
        {
          if(this.studentId.toLowerCase()=='Add'.toLowerCase())
          {
            // new student functionality
            this.isNewStudent=true;
            this.header='Add new Student' ;
          }
          else
          {
            this.isNewStudent=false;
            this.header='Edit Student' ;
            //existing fnc
          }
        }

        if(this.studentId)
        {
          this.studentService.getStudent(this.studentId).subscribe(
            (successResponse) => {
              this.student = successResponse;
            });
            //to get gender lists
           // this.genderService.getGenderList().subscribe(
            //  (successResponse) => {
            //    this.genderList = successResponse;
           //   }
            //  )
        }
      }
    );
  }
  onUpdate() : void {
      this.studentService.updateStudent(this.student.id , this.student).subscribe
     ( (successResponse) =>
      {
        console.log(successResponse);
      },
      (errorResponse)=>
      {
        //log it
      }
     );
       /*this.studentService.updateStudent(this.student.id, this.student).
       subscribe((successResponse) =>
       {
          this.snackbar.open('Student Updated Successfully', undefined,
          {
            duration: 2000
          });
        },
        (errorResponse ) => {
          //Log it
        }

      ); */



    //call Student service to update student
  }
  onDelete() : void
  {
    this.studentService.deleteStudent(this.student.id).subscribe
    (
      (successResponse) =>
      {
        this.snackbar.open('Student Deleted Successfully', undefined,
        {
          duration: 2000
        });
        setTimeout(()=>
        {
          this.router.navigateByUrl('students');

        },2000
        );

      },
      (errorResponse) =>
      {
        //Log
      }
    );
    // student service to delete
  }
  onAdd(): void
  {
    this.studentService.addStudent(this.student)
    .subscribe(
      (Response) =>
      {
        console.log(Response);
      },
      (error) =>
      {
        //Log
      }
    )
    ;
  }

}
