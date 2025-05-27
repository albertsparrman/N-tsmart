import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [ CourseCardComponent, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  coursesData: any;
  url: string = '../../../assets/courses.json'

  constructor(private http: HttpClient) {}


  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.coursesData = res;
    })
  }
}
