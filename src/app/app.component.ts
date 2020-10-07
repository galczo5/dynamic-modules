import {Component, ElementRef, ViewChild} from '@angular/core';
import {LazyLoadModuleService} from '../lazy-load-module.service';

@Component({
  selector: 'app-root',
  template: `
    <p>Below should be printed lazy component from lazy loaded module</p>
    <p>
      <button (click)="create()">Create lazy loaded module with component</button>
    </p>
    <p #container></p>
  `
})
export class AppComponent {

  @ViewChild('container', { read: ElementRef })
  container: ElementRef;

  constructor(private lazyLoadModuleService: LazyLoadModuleService) {
  }

  create(): void {
    this.lazyLoadModuleService.load(this.container.nativeElement);
  }

}
