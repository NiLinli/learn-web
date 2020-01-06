import { Pipe, PipeTransform } from '@angular/core';

// 1. 管道元数据 Decorator
@Pipe({
  name: 'exponentialStrength' // 管道名字
})


// 2. 实现接口 PipeTransform
export class ExponentialStrengthPipe implements PipeTransform {

  // value -> 传进来的值
  // args： 管道后面跟的参数  date：args
  transform(value: number, exponent: string): any {
    const exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }

}
