import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTableFooterComponent } from './advanced-table-footer.component';

describe('AdvancedTableFooterComponent', () => {
  let component: AdvancedTableFooterComponent;
  let fixture: ComponentFixture<AdvancedTableFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedTableFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedTableFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
