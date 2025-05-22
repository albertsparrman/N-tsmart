import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [RouterLink, CommonModule, HttpClientModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() courseId: string | undefined;

  coursesData: any;
  url: string = '../../../assets/courses.json'

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.coursesData = res;
      console.log(this.coursesData);
    })
  }

}
