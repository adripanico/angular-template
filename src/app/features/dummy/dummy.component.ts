import { Component, OnInit } from '@angular/core';
import { DummyService } from '@app/core/services/dummy.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  constructor(private dummyService: DummyService) {
    //
  }

  ngOnInit() {
    //
  }

}
