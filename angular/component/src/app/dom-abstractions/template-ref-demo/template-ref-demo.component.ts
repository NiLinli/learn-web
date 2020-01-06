import { Component, OnInit, AfterViewInit, TemplateRef, ViewContainerRef, ViewRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-ref-demo',
  templateUrl: './template-ref-demo.component.html',
  styleUrls: ['./template-ref-demo.component.css']
})
export class TemplateRefDemoComponent implements OnInit, AfterViewInit {

  @ViewChild('tpl') tpl: TemplateRef<any>;
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    // 
    const view: ViewRef = this.tpl.createEmbeddedView(null); // Creating embedded view

    this.vc.insert(view);

    console.log(this.vc.element);
    console.log(this.vc.length);
  }

}
