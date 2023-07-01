import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonProgressBar,
  IonButton,
  IonListHeader,
  IonList,
  IonText,
  IonItem,
  IonNavLink,
} from '@ionic/react';

type SurveyBaseProps = {
  title: string;
  // Scale out of 0 ~ 1
  progress: number;
  children: React.ReactElement[];
  listHeader?: string;
  nextButtonDisabled?: boolean;
  nextButtonOnClick?: () => void;
  nextPage?: () => React.ReactElement;
  nextButtonText?: string;
  questionPosition?: 'first' | 'last';
};

const SurveyBase: React.FC<SurveyBaseProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{props.title}</IonTitle>
          <IonProgressBar value={props.progress} />
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{props.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonListHeader>
            <IonText>
              <h2>{props.listHeader || 'Choose your answer'}</h2>
            </IonText>
          </IonListHeader>
          {props.children.map((i) => i)}
          <IonItem key="next-button">
            {props.questionPosition !== 'first' && (
              <IonNavLink routerDirection="back">
                <IonButton slot="start" fill="clear">
                  Previous
                </IonButton>
              </IonNavLink>
            )}

            <div style={{ margin: 'auto' }}>
              <IonNavLink routerDirection="forward" component={props.nextPage}>
                <IonButton
                  fill="solid"
                  color="primary"
                  shape="round"
                  size="large"
                  disabled={props.nextButtonDisabled}
                  onClick={props.nextButtonOnClick}
                >
                  {props.nextButtonText || 'Next'}
                </IonButton>
              </IonNavLink>
            </div>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SurveyBase;
