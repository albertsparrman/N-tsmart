import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from "../../components/course-card/course-card.component";
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  coursesData: any;
  url: string = '../../../assets/courses.json'
  /*   shine = '150vw' */
  screenHeight: number = 0
  backgroundColor = '#1a75ff4d'
  color = 'var(--color-light-text)'
  backgroundColorBouble = 'var(--color-light)'


  constructor(private http: HttpClient) { }

  @ViewChild('newSection2') section2: ElementRef | undefined;

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.coursesData = res;
    })
    if (typeof window !== "undefined") {
      this.onWindowScroll()
      this.onResize();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    /*     this.shine = 150 - (window.scrollY/(1 + this.screenHeight/100)) + 'vw'
        console.log(window.scrollY/(1 + this.screenHeight/100));
         */
    if (window.scrollY >= this.section2?.nativeElement.offsetTop - this.screenHeight / 3) {
      this.backgroundColor = 'var(--color-light)'
      this.color = 'var(--color-dark)'
      this.backgroundColorBouble = 'var(--color-light-text)'
    }
    else {
      this.backgroundColor = '#1a75ff4d'
      this.color = 'var(--color-light-text)'
      this.backgroundColorBouble = 'var(--color-light)'
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
  }

  /*   ngAfterViewInit() {
      
  
      if (typeof window !== "undefined") {
        this.onWindowScroll()
      }
    }
   */

}
