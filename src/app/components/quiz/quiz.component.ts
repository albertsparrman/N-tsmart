import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit {
  quizId: string | null = ""
  quizLocked: boolean = false
  quizSection: number = 0;
  quizDone: boolean = false
  isAnswerCorrect: boolean = false
  correctAnswers: number = 0
  submittedAnswer: string = ''
  resetSelections: boolean = true


  coursesData: any;
  url: string = '../../../assets/courses.json'

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.quizId = params['id']
    })

    this.http.get(this.url).subscribe(res => {
      this.coursesData = res;
    })
  }

  submitAnswer(answerId: string, correctAnswer: boolean, el: HTMLElement) {
    if (this.quizLocked == false) {
      this.submittedAnswer = answerId
      setTimeout(() => {
         el.scrollIntoView()
      }, 50);
     
      this.quizLocked = true
      if (this.isAnswerCorrect = correctAnswer) {
        this.correctAnswers += 1
        console.log(this.correctAnswers);
      }
    }
    else {

    }
  }

  nextQuestion() {
    if (this.quizId && this.quizSection < this.coursesData[this.quizId].quiz.length) {
      this.quizSection += 1
    }
    else {
      console.log('quiz done');
    }
    this.submittedAnswer = ''
    this.quizLocked = false
  }

}
