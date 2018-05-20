import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiplomePersonnelComponent } from './edit-diplome-personnel.component';

describe('EditDiplomePersonnelComponent', () => {
  let component: EditDiplomePersonnelComponent;
  let fixture: ComponentFixture<EditDiplomePersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDiplomePersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiplomePersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
