import { IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardHeader, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useGetPetList } from '../../hooks/petstore-open-apitags-hooks';
import styles from './view2.module.css';
import createClassTransformer from '../../style-utils';

IgrButtonModule.register();
IgrCardModule.register();
IgrIconButtonModule.register();
IgrRippleModule.register();

export default function View2() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  let dsfg: string | undefined;
  const { petstoreOpenAPITagsPet: adsf } = useGetPetList(dsfg as any);
  const { petstoreOpenAPITagsPet } = useGetPetList(undefined);

  return (
    <>
      <div className={classes("row-layout view-2-container")}>
        {petstoreOpenAPITagsPet?.map(() => (
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
                <IgrButton variant="flat" type="button" className={classes("button")}>
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
        ))}
        <IgrButton type="button" className={classes("button_1")}>
          <span key={uuid()}>Button</span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
        <IgrButton type="button" className={classes("button_1")}>
          <span key={uuid()}>Button</span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
        <IgrButton type="button" className={classes("button_1")}>
          <span key={uuid()}>Button</span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
        <IgrButton type="button" className={classes("button_1")}>
          <span key={uuid()}>Button</span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
        <IgrButton type="button" className={classes("button_1")}>
          <span key={uuid()}>Button</span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
        <IgrButton type="button" className={classes("button_1")}>
          <span key={uuid()}>Button</span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
        <IgrButton type="button" className={classes("button_1")}>
          <span key={uuid()}>Button</span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
        <IgrButton type="button" className={classes("button_1")}>
          <span key={uuid()}>Button</span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
        <IgrButton type="button" className={classes("button_1")}>
          <span key={uuid()}>Button</span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
        <IgrButton type="button" className={classes("button_1")}>
          <span key={uuid()}>Button</span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
        <IgrButton type="button" className={classes("button_1")}>
          <span key={uuid()}>Button</span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
      </div>
    </>
  );
}
