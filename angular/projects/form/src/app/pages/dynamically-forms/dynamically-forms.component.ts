import { Component, OnInit } from '@angular/core';
import { QuestionService } from './model/question.service';

@Component({
  selector: 'app-dynamically-forms',
  templateUrl: './dynamically-forms.component.html',
  styleUrls: ['./dynamically-forms.component.css']
})
export class DynamicallyFormsComponent implements OnInit {

  questions: any;

  constructor(
    private service: QuestionService
  ) {

    this.questions = service.getQuestions();
  }

  ngOnInit() {
  }

}
