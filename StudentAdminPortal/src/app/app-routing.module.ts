import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { ViewStudentComponent } from './students/view-student/view-student.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [

  {
      path : ' ',
      component : HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component : RegisterComponent
  },

  {
    path:'students',
    component: StudentsComponent
  },
  {
    path:'students/:id',
    component: ViewStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
