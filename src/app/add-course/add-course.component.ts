import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  courseTitle=""
courseDescription=""
courseDate=""
courseDuration=""
courseVenue=""

constructor(private api:ApiService){}



readValues = ()=>
{

  let data={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,
  "courseDate":this.courseDate,
  "courseDuration":this.courseDuration,
  "courseVenue":this.courseVenue
}

console.log(data)

this.api.addCourse(data).subscribe(
  (response:any) => {
    console.log(response)
    if (response.status=="success") {
      alert("Course added succesfully ")
      this.courseTitle=""
      this.courseDate=""
      this.courseDuration=""
      this.courseVenue=""
      this.courseDescription=""
      
    } else {

      alert("course couldnt add ")
      
    }
  }
)

}




}
