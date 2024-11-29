import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent } from '@infragistics/igniteui-angular';
import { AsdfComponent } from './asdf.component';

describe('AsdfComponent', () => {
  let component: AsdfComponent;
  let fixture: ComponentFixture<AsdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AsdfComponent, NoopAnimationsModule, FormsModule, IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
