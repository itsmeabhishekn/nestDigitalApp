import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {
  name=""
  friendName=""
  DescribeYourFriend=""
  friendNickName=""

constructor(private api:ApiService){}


  readValues =()=>
{
let data:any={"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
console.log(data)

this.api.addFriends(data).subscribe(
  (response:any) => {
console.log(response)

if (response.status="success") {

  alert("friend added succesfully ")

  this.name=""
  this.friendName=""
  this.friendNickName=""
  this.DescribeYourFriend=""

  
} else {
  alert("failed adding friend")
  
}

  })

}




}
