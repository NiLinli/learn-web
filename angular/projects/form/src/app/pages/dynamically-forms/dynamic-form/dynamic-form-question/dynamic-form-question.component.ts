import { Component, OnInit, Input } from '@angular/core';
import { DropdownQuestion } from '../../model/question-dropdown';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {

  @Input() question: DropdownQuestion;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.question.key].valid; }




  constructor() { }

  ngOnInit() {
  }



}
