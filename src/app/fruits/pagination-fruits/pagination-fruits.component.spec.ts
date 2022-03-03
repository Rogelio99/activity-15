import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationFruitsComponent } from './pagination-fruits.component';

describe('PaginationFruitsComponent', () => {
  let component: PaginationFruitsComponent;
  let fixture: ComponentFixture<PaginationFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationFruitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
