import { routerTransition } from '@app/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition],
})
export class AppComponent {
  title = 'Project X';
  year = (new Date).getFullYear();

  sections = [
    {
      route: '/home',
      title: 'Home',
    }, {
      route: '/components',
      title: 'Components',
    }, {
      route: '/dummy',
      title: 'Dummy',
    }
  ];
 //
  socialNetworks = [
    {
      title: 'Github',
      faIcon: 'fa fa-2x fa-github',
      url: 'https://www.github.com/adripanico',
    }, {
      title: 'Twitter',
      faIcon: 'fa fa-2x fa-twitter',
      url: 'https://www.twitter.com/adripanico',
    }, {
      title: 'LinkedIn',
      faIcon: 'fa fa-2x fa-linkedin',
      url: 'https://www.linkedin.com/in/caballerocastro/',
    }
  ];
}

