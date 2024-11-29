import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { MasterView1Component } from './master-view1/master-view1.component';
import { DsafComponent } from './dsaf/dsaf.component';
import { AsdfComponent } from './asdf/asdf.component';
import { MasterView2Component } from './master-view2/master-view2.component';

export const routes: Routes = [
  { path: '', redirectTo: 'master-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'master-view', loadChildren: () => import('./master-view/master-view.routes').then(m => m.routes), data: { text: 'Master View' } },
  {
    path: 'master-view1',
    component: MasterView1Component,
    data: {
      text: 'Master View 1'
    }
  },
  {
    path: 'dsaf',
    component: DsafComponent,
    data: {
      text: 'dsaf'
    }
  },
  {
    path: 'asdf',
    component: AsdfComponent,
    data: {
      text: 'asdf'
    }
  },
  {
    path: 'master-view2',
    component: MasterView2Component,
    data: {
      text: 'Master View 2'
    }
  },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
