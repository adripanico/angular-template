import { Component, OnInit } from '@angular/core';
import { DummyService } from '@app/core/services/dummy.service';
// import { ExampleService } from './example.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private dummyService: DummyService
              // private exampleService: ExampleService
             ) {
    //
  }

  ngOnInit() {
    //
  }
}
