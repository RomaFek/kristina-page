import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KristinaComponent } from './kristina.component';

describe('KristinaComponent', () => {
  let component: KristinaComponent;
  let fixture: ComponentFixture<KristinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KristinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KristinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
