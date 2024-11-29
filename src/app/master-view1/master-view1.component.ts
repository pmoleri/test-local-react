import { Component } from '@angular/core';
import { IGX_BANNER_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-master-view1',
  standalone: true,
  imports: [IGX_BANNER_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './master-view1.component.html',
  styleUrls: ['./master-view1.component.scss']
})
export class MasterView1Component {
}
