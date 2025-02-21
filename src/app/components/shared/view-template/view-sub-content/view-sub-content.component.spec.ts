import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubContentComponent } from './view-sub-content.component';

describe('ViewSubContentComponent', () => {
  let component: ViewSubContentComponent;
  let fixture: ComponentFixture<ViewSubContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSubContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSubContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
