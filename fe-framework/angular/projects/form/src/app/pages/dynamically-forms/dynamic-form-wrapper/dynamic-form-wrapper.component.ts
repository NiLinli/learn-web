import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../model/question-base';
import { QuestionControlService } from '../model/question-control.service';

@Component({
  selector: 'dynamic-form-wrapper',
  templateUrl: './dynamic-form-wrapper.component.html',
  styleUrls: ['./dynamic-form-wrapper.component.css']
})
export class DynamicFormWrapperComponent implements OnInit {

  @Input() questions: QuestionBase<any>[];
  form: FormGroup;
  payLoad: string;

  constructor(
    private qcs: QuestionControlService
  ) {
    this.questions = [];
    this.payLoad = '';
  }

  ngOnInit() {

    this.form = this.qcs.toFormGroup(this.questions);
  }


  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
