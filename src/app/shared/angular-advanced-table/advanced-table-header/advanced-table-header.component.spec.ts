import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTableHeaderComponent } from './advanced-table-header.component';

describe('AdvancedTableHeaderComponent', () => {
  let component: AdvancedTableHeaderComponent;
  let fixture: ComponentFixture<AdvancedTableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedTableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
