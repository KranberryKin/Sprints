import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericformComponent } from './genericform.component';

describe('GenericformComponent', () => {
  let component: GenericformComponent<any>;
  let fixture: ComponentFixture<GenericformComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
