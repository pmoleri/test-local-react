import { IgrAvatar, IgrAvatarModule, IgrExpansionPanel, IgrExpansionPanelModule, IgrList, IgrListItem, IgrListModule } from '@infragistics/igniteui-react';
import styles from './master-view2.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrExpansionPanelModule.register();
IgrListModule.register();

export default function MasterView2() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout master-view-2-container")}>
        <IgrExpansionPanel className={classes("expansion-panel")}>
          <p className={classes("typography__body-2 text")} key={uuid()}>
            <span>Body 2</span>
          </p>
          <p className={classes("typography__body-2 text")} key={uuid()}>
            <span>Body 2</span>
          </p>
          <p className={classes("typography__body-2 text")} key={uuid()}>
            <span>Body 2</span>
          </p>
          <span slot="title" key={uuid()}>Title goes here...</span>
          <span slot="subtitle" key={uuid()}>Subtitle goes here...</span>
        </IgrExpansionPanel>
        <span className={classes("banner")}>Banner not yet available in React</span>
        <IgrExpansionPanel className={classes("expansion-panel_1")}>
          <p className={classes("typography__body-2 text")} key={uuid()}>
            <span>Body 2</span>
          </p>
          <p className={classes("typography__body-2 text")} key={uuid()}>
            <span>adsfadsghdgfhdgfj</span>
          </p>
          <span slot="title" key={uuid()}>Title goes here...</span>
          <span slot="subtitle" key={uuid()}>Subtitle goes here...</span>
        </IgrExpansionPanel>
        <div className={classes("row-layout group")}>
          <IgrExpansionPanel className={classes("expansion-panel_2")}>
            <p className={classes("typography__body-2 text")} key={uuid()}>
              <span>Body 2</span>
            </p>
            <p className={classes("typography__body-2 text")} key={uuid()}>
              <span>Body 2</span>
            </p>
            <p className={classes("typography__body-2 text")} key={uuid()}>
              <span>Body 2</span>
            </p>
            <span slot="title" key={uuid()}>Title goes here...</span>
            <span slot="subtitle" key={uuid()}>Subtitle goes here...</span>
          </IgrExpansionPanel>
        </div>
        <p className={classes("typography__body-2 text")}>
          <span>dfasgdasgfhfhdfshjjgj</span>
        </p>
        <p className={classes("typography__body-2 text")}>
          <span>dafdasgdaghhh</span>
        </p>
        <IgrAvatar shape="circle">
          <span className={classes("material-icons")} key={uuid()}>
            <span key={uuid()}>people</span>
          </span>
        </IgrAvatar>
        <IgrList className={classes("list")}>
          <IgrListItem key={uuid()}>
            <div slot="start" key={uuid()}>
              <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </IgrAvatar>
            </div>
            <div slot="title" key={uuid()}>Title goes here</div>
            <div slot="subtitle" key={uuid()}>Subtitle...</div>
            <span slot="end" className={classes("material-icons icon")} key={uuid()}>
              <span key={uuid()}>star</span>
            </span>
          </IgrListItem>
        </IgrList>
      </div>
    </>
  );
}
