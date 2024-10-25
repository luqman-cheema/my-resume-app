import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalReferencesComponent } from './professional-references.component';

describe('ProfessionalReferencesComponent', () => {
  let component: ProfessionalReferencesComponent;
  let fixture: ComponentFixture<ProfessionalReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalReferencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
