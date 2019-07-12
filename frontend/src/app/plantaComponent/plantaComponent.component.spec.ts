import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaComponentComponent } from './plantaComponent.component';

describe('PlantaComponentComponent', () => {
  let component: PlantaComponentComponent;
  let fixture: ComponentFixture<PlantaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
