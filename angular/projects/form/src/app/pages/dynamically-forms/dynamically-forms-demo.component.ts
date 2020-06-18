import { Component, OnInit } from '@angular/core';
import { QuestionService } from './model/question.service';

@Component({
  selector: 'app-dynamically-forms-demo',
  templateUrl: './dynamically-forms-demo.component.html',
  styleUrls: ['./dynamically-forms-demo.component.css']
})
export class DynamicallyFormsDemoComponent implements OnInit {

  questions: any;

  constructor(
    private service: QuestionService
  ) {

    this.questions = service.getQuestions();
  }

  ngOnInit() {
  }

}
