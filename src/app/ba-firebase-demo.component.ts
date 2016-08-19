import { Component } from '@angular/core';
import { BaListDemoComponent} from './ba-list-demo.component';

@Component({
  moduleId: module.id,
  selector: 'ba-firebase-demo-app',
  templateUrl: 'ba-firebase-demo.component.html',
  directives: [BaListDemoComponent],
  styleUrls: ['ba-firebase-demo.component.css']
})
export class BaFirebaseDemoAppComponent {
  title = 'ba-firebase-demo works!';
  data = [{title: "1"}, {title: "2"}];
}
