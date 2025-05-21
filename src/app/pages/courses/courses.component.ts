import { Component, ViewChild } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NavComponent, CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
   @ViewChild('gfgform') form: JSON | undefined;

  checkform() {
    console.log('hallå');
    if (this.form != undefined) {
          console.log(this.form);
    }    
  }
}
