import { Routes } from '@angular/router';
import { MasterViewComponent } from './master-view.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';

export const routes: Routes = [{
  path: '', component: MasterViewComponent, children: [
    {
      path: '',
      redirectTo: 'view1',
      pathMatch: 'full'
    },
    {
      path: 'view1',
      component: View1Component,
      data: {
        text: 'View 1'
      }
    },
    {
      path: 'view2',
      component: View2Component,
      data: {
        text: 'View 2'
      }
    },
    {
      path: 'view3',
      component: View3Component,
      data: {
        text: 'View 3'
      }
    }
  ]
}];
