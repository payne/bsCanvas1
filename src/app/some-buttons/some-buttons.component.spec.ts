import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeButtonsComponent } from './some-buttons.component';

describe('SomeButtonsComponent', () => {
  let component: SomeButtonsComponent;
  let fixture: ComponentFixture<SomeButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
