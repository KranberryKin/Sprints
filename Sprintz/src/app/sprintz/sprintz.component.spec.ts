import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintzComponent } from './sprintz.component';

describe('SprintzComponent', () => {
  let component: SprintzComponent;
  let fixture: ComponentFixture<SprintzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SprintzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprintzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
