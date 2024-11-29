import { IgrButton, IgrButtonModule, IgrExpansionPanel, IgrExpansionPanelModule, IgrRipple, IgrRippleModule, IgrStep, IgrStepper, IgrStepperModule } from '@infragistics/igniteui-react';
import { useRef } from 'react';
import styles from './master-view1.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrExpansionPanelModule.register();
IgrRippleModule.register();
IgrStepperModule.register();

export default function MasterView1() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const stepper = useRef<IgrStepper>(null);

  return (
    <>
      <div className={classes("row-layout master-view-1-container")}>
        <IgrStepper titlePosition="bottom" ref={stepper} className={classes("stepper")}>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <p className={classes("typography__body-1 text")} key={uuid()}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
              </p>
              <div className={classes("row-layout group")} key={uuid()}>
                <IgrButton type="button" clicked={() => stepper?.current?.next()} className={classes("button")}>
                  <span key={uuid()}>Next</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <p slot="title" key={uuid()}>Address</p>
          </IgrStep>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <p className={classes("typography__body-1 text")} key={uuid()}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
              </p>
              <div className={classes("row-layout group")} key={uuid()}>
                <IgrButton type="button" clicked={() => stepper?.current?.prev()} className={classes("button")}>
                  <span key={uuid()}>Prev</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton type="button" clicked={() => stepper?.current?.next()} className={classes("button")}>
                  <span key={uuid()}>Next</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <p slot="title" key={uuid()}>Item</p>
          </IgrStep>
          <IgrStep optional="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <p className={classes("typography__body-1 text")} key={uuid()}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
              </p>
              <IgrExpansionPanel className={classes("expansion-panel")} key={uuid()}>
                <p className={classes("typography__body-2 text")} key={uuid()}>
                  <span>Body 2</span>
                </p>
                <span className={classes("banner")} key={uuid()}>Banner not yet available in React</span>
                <span slot="title" key={uuid()}>Title goes here...</span>
                <span slot="subtitle" key={uuid()}>Subtitle goes here...</span>
              </IgrExpansionPanel>
              <div className={classes("row-layout group")} key={uuid()}>
                <IgrButton type="button" clicked={() => stepper?.current?.prev()} className={classes("button")}>
                  <span key={uuid()}>Prev</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton type="button" clicked={() => stepper?.current?.reset()} className={classes("button")}>
                  <span key={uuid()}>Reset</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <p slot="title" key={uuid()}>Wrap</p>
            <p slot="subtitle" key={uuid()}>(Optional)</p>
          </IgrStep>
        </IgrStepper>
      </div>
    </>
  );
}
