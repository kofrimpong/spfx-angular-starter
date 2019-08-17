import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {

  @Input()
  public properties: any;

  constructor(private router: Router) {
    //this.initializeApp();
  }

  initializeApp() {
    this.initTranslate();
    this.setup();
  }

  initTranslate() {

  }

  async setup() {

  }

}
