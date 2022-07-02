import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovementsSectionComponent } from './improvements-section.component';

describe('ImprovementsSectionComponent', () => {
  let component: ImprovementsSectionComponent;
  let fixture: ComponentFixture<ImprovementsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprovementsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImprovementsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
