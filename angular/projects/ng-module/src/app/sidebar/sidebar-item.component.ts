import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ExampleDef } from '../example.model';

@Component({
  selector: '[app-sidebar-item]',
  templateUrl: './sidebar-item.component.html'
})
export class SidebarItemComponent implements OnInit {
  @Input('item') item: ExampleDef;

  constructor() {
  }



  ngOnInit() {
  }

}
