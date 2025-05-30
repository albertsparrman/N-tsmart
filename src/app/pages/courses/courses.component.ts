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
  threeToSix: boolean = false
  sevenToTen: boolean = false
  elevenToFourteen: boolean = false
  fifteenToSeventeen: boolean = false

  constructor(private http: HttpClient) {}


  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.coursesData = res;
    })
  }

  selectAgeInput(age: string) {
    if (age == "threeToSix") {
      this.threeToSix = !this.threeToSix
    }
    else if (age == "sevenToTen") {
      this.sevenToTen = !this.sevenToTen
    }
    else if (age == "elevenToFourteen") {
      this.elevenToFourteen = !this.elevenToFourteen
    }
    else if (age == "fifteenToSeventeen") {
      this.fifteenToSeventeen = !this.fifteenToSeventeen
    }
  }
}
