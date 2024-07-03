import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMoviesComponent } from './form-movies.component';

describe('FormMoviesComponent', () => {
  let component: FormMoviesComponent;
  let fixture: ComponentFixture<FormMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormMoviesComponent]
    });
    fixture = TestBed.createComponent(FormMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
