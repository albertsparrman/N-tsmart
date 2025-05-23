import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [NavComponent, CommonModule, HttpClientModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
  name: string | null = "";
  id: string | null = ""

  coursesData: any;
  url: string = '../../../assets/courses.json'

  constructor(private route: ActivatedRoute, private http: HttpClient, private titleService: Title) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.name = params['name']
      this.id = params['id']
    })

    this.http.get(this.url).subscribe(res => {
      this.coursesData = res;
    })

    setTimeout(() => {
      if (this.id) {
        this.titleService.setTitle("Nätsmart - " + this.coursesData[this.id].name)
      }
    }, 100);
  }
}
