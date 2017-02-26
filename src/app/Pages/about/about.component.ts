import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {
    title: string = 'hello student!';
    name: string = 'ivan';

    showMe($event) {
        alert($event + ' ' + this.name);
    }

  constructor() { }

  ngOnInit() {
  }

}
