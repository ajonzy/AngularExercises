import { Component } from '@angular/core';

@Component({
  selector: 'app-create-course-form',
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.scss']
})
export class CreateCourseFormComponent {
  categories = [
    {
      id: 1,
      name: "Developement"
    },
    {
      id: 2,
      name: "Art"
    },
    {
      id: 3,
      name: "Language"
    }
  ]

  handleSubmit(form: any) {
    console.log(form)
  }
}
