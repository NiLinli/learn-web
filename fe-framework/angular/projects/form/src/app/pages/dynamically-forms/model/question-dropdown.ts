import { QuestionBase } from './question-base';

type OptionItem = {
  key: string,
  value: string
};

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  options: OptionItem[];

  constructor(options: any = {}) {
    super(options);
    this.options = options.options || [];
  }
}
