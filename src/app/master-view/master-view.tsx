import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrNavbar, IgrNavbarModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './master-view.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrNavbarModule.register();
IgrRippleModule.register();

export default function MasterView() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("column-layout master-view-container")}>
        <IgrNavbar className={classes("navbar")}>
          <div className={classes("row-layout group")} key={uuid()}>
            <IgrAvatar src="/src/assets/Logo.svg" shape="circle" className={classes("avatar")}></IgrAvatar>
            <IgrButton variant="flat" type="button" clicked={() => navigate(`/master-view/view1`)} className={classes("button")}>
              <span key={uuid()}>View 1</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" type="button" clicked={() => navigate(`/master-view/view2`)} className={classes("button")}>
              <span key={uuid()}>View 2</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" type="button" clicked={() => navigate(`/master-view/view3`)} className={classes("button")}>
              <span key={uuid()}>View 3</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrNavbar>
        <div className={classes("view-container")}>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
