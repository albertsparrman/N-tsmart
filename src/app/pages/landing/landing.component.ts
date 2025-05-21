import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavComponent, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements AfterViewInit {
  /*   shine = '150vw' */
  backgroundOpacity = ''
  screenHeight: number = 0
  backgroundColor = '#1a75ff4d'
  color = 'var(--color-light-text)'

  @ViewChild('newSection') section: ElementRef | undefined;
  @ViewChild('newSection2') section2: ElementRef | undefined;

  ngAfterViewInit(): void {
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
    if (window.scrollY >= this.section2?.nativeElement.offsetTop) {
      this.backgroundColor = 'var(--color-light)'
      this.color = 'var(--color-dark)'
    }
    else {
      this.backgroundColor = '#1a75ff4d'
      this.color = 'var(--color-light-text)'
    }
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
