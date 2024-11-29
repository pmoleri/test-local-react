import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_EXPANSION_PANEL_DIRECTIVES, IGX_BANNER_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxAvatarComponent, IGX_LIST_DIRECTIVES } from '@infragistics/igniteui-angular';
import { MasterView2Component } from './master-view2.component';

describe('MasterView2Component', () => {
  let component: MasterView2Component;
  let fixture: ComponentFixture<MasterView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MasterView2Component, NoopAnimationsModule, FormsModule, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_BANNER_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxAvatarComponent, IGX_LIST_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
