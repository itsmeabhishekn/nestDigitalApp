import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent {
empid=""
password=""

constructor(private route:Router){}

readValues = () => 
{
  let data:any = {"empid":this.empid,"password":this.password}

  console.log(data)

  if(this.empid=="1122"&&this.password=="1234")
  {
    this.route.navigate(['/empsuccess'])
  }
  else {
    alert("invalid credentials , please check ")
  }
}

}
