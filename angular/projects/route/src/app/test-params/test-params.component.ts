import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-test-params',
  templateUrl: './test-params.component.html',
  styleUrls: ['./test-params.component.css']
})
export class TestParamsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
  }

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

// 路由参数
// 1. 必选 路由定义了路由参数, 必须匹配
// 2. 可选

// navigate 方法中, 传递参数是在 数组 中完成的
