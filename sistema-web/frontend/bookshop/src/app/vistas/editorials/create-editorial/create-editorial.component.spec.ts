import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditorialComponent } from './create-editorial.component';

describe('CreateEditorialComponent', () => {
  let component: CreateEditorialComponent;
  let fixture: ComponentFixture<CreateEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
