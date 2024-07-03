import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMoviesComponent } from './crud-movies.component';

describe('CrudMoviesComponent', () => {
  let component: CrudMoviesComponent;
  let fixture: ComponentFixture<CrudMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudMoviesComponent]
    });
    fixture = TestBed.createComponent(CrudMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
