import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(private route:Router){}
  name=""
  password=""
  adminlog = ()=>
  {
    let data:any = 
    {
      "name":this.name,
      "password":this.password
    }
    console.log(data)
  
  if (this.name=="admin"&&this.password=="12345") {
    this.route.navigate(['/adminhome'])
    
  } else {
  
    alert("invalid login")
    
  }
  
  }
  

}
