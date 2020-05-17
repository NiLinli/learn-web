import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-test-params-optional',
  templateUrl: './test-params-optional.component.html',
  styleUrls: ['./test-params-optional.component.css']
})
export class TestParamsOptionalComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const foo = this.route.snapshot.paramMap.get('foo');

    this.route.paramMap.pipe(
      map(parmas => parmas.get('id'))
    ).subscribe(
      value => console.log(`观察 paramMap 获取的 id 为 ${value}`)
    );

    console.log(`
      id = ${id}
      foo = ${foo}
    `);

  }

}
