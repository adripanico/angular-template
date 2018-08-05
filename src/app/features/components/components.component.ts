import { Component, OnInit } from '@angular/core';
import { routerTransition } from '@app/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  animations: [routerTransition],
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
