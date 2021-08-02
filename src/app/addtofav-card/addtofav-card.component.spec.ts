import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtofavCardComponent } from './addtofav-card.component';

describe('AddtofavCardComponent', () => {
  let component: AddtofavCardComponent;
  let fixture: ComponentFixture<AddtofavCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtofavCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtofavCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
