import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_BANNER_DIRECTIVES, IgxIconComponent } from '@infragistics/igniteui-angular';
import { MasterView1Component } from './master-view1.component';

describe('MasterView1Component', () => {
  let component: MasterView1Component;
  let fixture: ComponentFixture<MasterView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MasterView1Component, NoopAnimationsModule, FormsModule, IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_BANNER_DIRECTIVES, IgxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
