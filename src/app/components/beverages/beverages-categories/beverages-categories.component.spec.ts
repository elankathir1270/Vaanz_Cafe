import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesCategoriesComponent } from './beverages-categories.component';

describe('BeveragesCategoriesComponent', () => {
  let component: BeveragesCategoriesComponent;
  let fixture: ComponentFixture<BeveragesCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeveragesCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeveragesCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
