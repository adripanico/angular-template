import { Component, OnInit } from '@angular/core';
import { DummyService } from '@app/core';
// import { ExampleService } from './example.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private dummyService: DummyService,
              // private exampleService: ExampleService
             ) {
    //
  }

  ngOnInit() {
    //
  }

  private someMethod(): void {
    if (true) {
      console.log('lalala');
      for (let i: number = 0; i < 10; i++) {
        if (i % 2 === 0) {
          //
        } else {
          //
        }
      }
    }
  }
}