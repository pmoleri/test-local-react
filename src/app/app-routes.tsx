import { redirect } from 'react-router-dom';
import MasterView from './master-view/master-view';
import { routes as masterViewRoute } from './master-view/master-view-routes';
import MasterView1 from './master-view1/master-view1';
import Dsaf from './dsaf/dsaf';
import Asdf from './asdf/asdf';
import MasterView2 from './master-view2/master-view2';

export const routes = [
  { index: true, loader: () => redirect('master-view') },
  { path: 'master-view', element: <MasterView />, text: 'Master View', children: masterViewRoute },
  { path: 'master-view1', element: <MasterView1 />, text: 'Master View1' },
  { path: 'dsaf', element: <Dsaf />, text: 'dsaf' },
  { path: 'asdf', element: <Asdf />, text: 'asdf' },
  { path: 'master-view2', element: <MasterView2 />, text: 'Master View2' }
];
