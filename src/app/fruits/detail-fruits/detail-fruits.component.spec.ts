import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFruitsComponent } from './detail-fruits.component';

describe('DetailFruitsComponent', () => {
  let component: DetailFruitsComponent;
  let fixture: ComponentFixture<DetailFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFruitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
