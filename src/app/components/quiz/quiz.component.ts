import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import JSConfetti from 'js-confetti'

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
  quizStarted: boolean = false
  isAnswerCorrect: boolean = false
  correctAnswers: number = 0
  submittedAnswer: string = ''

  jsConfetti = new JSConfetti()


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

  startQuiz(scrollToOptions: HTMLElement) {
    this.quizStarted = true
    setTimeout(() => {
      scrollToOptions.scrollIntoView({
        behavior: 'smooth'
      })
    }, 10);
  }

  submitAnswer(answerId: string, correctAnswer: boolean, scrollToAnswer: HTMLElement) {
    if (this.quizLocked == false) {
      this.submittedAnswer = answerId
      setTimeout(() => {
        scrollToAnswer.scrollIntoView({
          behavior: 'smooth'
        })
      }, 10);

      this.quizLocked = true
      if (this.isAnswerCorrect = correctAnswer) {
        this.correctAnswers += 1
        console.log(this.correctAnswers);
      }
    }
    else {

    }
  }

  nextQuestion(scrollToOptions: HTMLElement) {
    if (this.quizId && this.quizSection <= this.coursesData[this.quizId].quiz.length) {
      this.quizSection += 1
      if (this.quizSection == this.coursesData[this.quizId].quiz.length) {
        setTimeout(() => {
          this.confetti()
        }, 200);
      }
    }
    setTimeout(() => {
      scrollToOptions.scrollIntoView({
        behavior: 'smooth'
      })
    }, 10);
    this.submittedAnswer = ''
    this.quizLocked = false
  }

  confetti() {
    console.log("ha");
    this.jsConfetti.addConfetti()

  }

}
