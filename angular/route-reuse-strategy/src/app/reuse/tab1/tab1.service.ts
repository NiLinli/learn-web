import { Injectable } from '@angular/core';
import { ShopItem, Tab1ChildComponent } from '../tab1-child/tab1-child.component';

@Injectable()
export class Tab1Service {

  constructor() { }


  handleList(shopItems: ShopItem[], tab1Child: Tab1ChildComponent): ShopItem[] {
    const temp = shopItems.map((v: ShopItem) => {
      v.num = 456;
      return v;
    });

    return temp;
  }
}
