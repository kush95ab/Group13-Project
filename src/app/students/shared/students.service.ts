import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Students} from './students.model';
 
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  studentsList:AngularFireList<any>;

  selectedStudents: Students = new Students;

  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
      this.studentsList= this.firebase.list('students');
      return this.studentsList;
  }

  insertStudents(Students:Students){
      this.studentsList.push({

        fullname:Students.fullname,
        name:Students.name,
        address:Students.address,
        dob:Students.dob,
        school:Students.school,
        grade:Students.grade,
        parentname:Students.parentname,
        mobile:Students.mobile,
        tp:Students.tp
      })
  }

//   updateStudents(Students:Students){
//     this.studentsList.update(Students.$key,
//       {
        
//         fullname:Students.fullname,
//         name:Students.name,
//         address:Students.address,
//         dob:Students.dob,
//         school:Students.school,
//         grade:Students.grade,
//         parentname:Students.parentname,
//         mobile:Students.mobile,
//         tp:Students.tp
//       })
//   }

//   deleteStudents($key : string){
//     this.studentsList.remove($key);
//   }

}


