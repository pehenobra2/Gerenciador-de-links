import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarInputComponent } from './primar-input.component';

describe('PrimarInputComponent', () => {
  let component: PrimarInputComponent;
  let fixture: ComponentFixture<PrimarInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimarInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimarInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
