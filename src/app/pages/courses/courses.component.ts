import { Component, OnInit, ViewChild } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NavComponent/* , CourseCardComponent */, CommonModule, FormsModule, RouterLink, HttpClientModule],
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
    console.log(this.coursesData);
    
  }

   @ViewChild('gfgform') form: JSON | undefined;

  checkform() {
    console.log('hallå');
    if (this.form != undefined) {
          console.log(this.form);
    }    
  }
}
