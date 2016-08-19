import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFire} from 'angularfire2/angularfire2';

@Component({
  selector: 'ba-list',
  templateUrl: './app/ba-list-demo.component.html'
})
export class BaListDemoComponent {
  data : Array<Object>;  

  items

  constructor(af: AngularFire) {
    // read a list at /items
    this.items = af.database.list('/items');

    var list = af.database.list('/items');

    this.items.push("foobar");
  }
}