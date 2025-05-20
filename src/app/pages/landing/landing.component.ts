import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavComponent, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  shine = '200rem'
  backgroundOpacity = ''
  screenHeight: number = 0;

  @ViewChild('newSection') section: ElementRef | undefined;
  @ViewChild('newSection2') section2: ElementRef | undefined;

  constructor() {

    if (typeof window !== "undefined") {
      this.onWindowScroll()
      this.onResize();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.shine = 200 - (window.scrollY/3) + 'rem'
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
    console.log(this.section?.nativeElement.offsetTop);
    
  }

/*   ngAfterViewInit() {
    

    if (typeof window !== "undefined") {
      this.onWindowScroll()
    }
  }
 */

}
