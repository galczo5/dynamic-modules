import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  template: `
    <img src="https://media0.giphy.com/media/a5MFvAwc6GPf2/giphy.gif?cid=ecf05e479gkofrs8v3x6ypws802yw6orwus7u1xqo17z1e4m&rid=giphy.gif" alt="lazy">
  `,
  styles: [
  ]
})
export class LazyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
