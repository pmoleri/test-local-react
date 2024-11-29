import { IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardHeader, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrRipple, IgrRippleModule, IgrStep, IgrStepper, IgrStepperModule } from '@infragistics/igniteui-react';
import { useRef } from 'react';
import styles from './asdf.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrCardModule.register();
IgrIconButtonModule.register();
IgrRippleModule.register();
IgrStepperModule.register();

export default function Asdf() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const stepper = useRef<IgrStepper>(null);

  return (
    <>
      <div className={classes("row-layout asdf-container")}>
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
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}></div>
            <p slot="title" key={uuid()}>Item</p>
          </IgrStep>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <IgrCard className={classes("card")} key={uuid()}>
                <IgrCardHeader key={uuid()}>
                  <h3 slot="title" key={uuid()}>
                    <span key={uuid()}>Title goes here...</span>
                  </h3>
                  <h5 slot="subtitle" key={uuid()}>
                    <span key={uuid()}>Subtitle goes here...</span>
                  </h5>
                </IgrCardHeader>
                <IgrCardActions className={classes("actions-content")} key={uuid()}>
                  <div style={{display: 'contents'}} slot="start" key={uuid()}>
                    <IgrButton variant="flat" type="button" className={classes("button_1")}>
                      <span key={uuid()}>Button</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                  </div>
                  <div slot="end" key={uuid()}>
                    <IgrIconButton variant="flat" key={uuid()}>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>favorite</span>
                      </span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrIconButton>
                    <IgrIconButton variant="flat" key={uuid()}>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>bookmark</span>
                      </span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrIconButton>
                    <IgrIconButton variant="flat" key={uuid()}>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>share</span>
                      </span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrIconButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
            </div>
            <p slot="title" key={uuid()}>Item</p>
          </IgrStep>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}></div>
            <p slot="title" key={uuid()}>Item</p>
          </IgrStep>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <IgrButton type="button" className={classes("button_1")} key={uuid()}>
                <span key={uuid()}>Button</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
            <p slot="title" key={uuid()}>Item</p>
          </IgrStep>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}></div>
            <p slot="title" key={uuid()}>Item</p>
          </IgrStep>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}></div>
            <p slot="title" key={uuid()}>Item</p>
          </IgrStep>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}></div>
            <p slot="title" key={uuid()}>Item</p>
          </IgrStep>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}></div>
            <p slot="title" key={uuid()}>Item</p>
          </IgrStep>
          <IgrStep optional="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <p className={classes("typography__body-1 text")} key={uuid()}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
              </p>
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
          <IgrStep optional="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}></div>
            <p slot="title" key={uuid()}>Wrap</p>
            <p slot="subtitle" key={uuid()}>(Optional)</p>
          </IgrStep>
        </IgrStepper>
      </div>
    </>
  );
}
