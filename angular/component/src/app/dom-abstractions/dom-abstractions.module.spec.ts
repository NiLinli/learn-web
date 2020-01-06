import { DomAbstractionsModule } from './dom-abstractions.module';

describe('DomAbstractionsModule', () => {
  let domAbstractionsModule: DomAbstractionsModule;

  beforeEach(() => {
    domAbstractionsModule = new DomAbstractionsModule();
  });

  it('should create an instance', () => {
    expect(domAbstractionsModule).toBeTruthy();
  });
});
