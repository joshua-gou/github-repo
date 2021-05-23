import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostUsedTopicsComponent } from './most-used-topics.component';

describe('MostUsedTopicsComponent', () => {
  let component: MostUsedTopicsComponent;
  let fixture: ComponentFixture<MostUsedTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostUsedTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostUsedTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
