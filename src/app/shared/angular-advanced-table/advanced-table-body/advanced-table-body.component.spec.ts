import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTableBodyComponent } from './advanced-table-body.component';

describe('AdvancedTableBodyComponent', () => {
  let component: AdvancedTableBodyComponent;
  let fixture: ComponentFixture<AdvancedTableBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedTableBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
