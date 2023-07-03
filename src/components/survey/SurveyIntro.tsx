import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonText,
  IonNavLink,
  IonButton,
  IonFooter,
  IonImg,
  CreateAnimation,
  Animation,
} from '@ionic/react';
import Survey1 from './Survey1';

const SurveyIntro: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Survey</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Survey</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <IonText>
            <h1>Let's find the best station for you!</h1>
          </IonText>
          <CreateAnimation
            duration={2000}
            iterations={Infinity}
            fromTo={[
              {
                property: 'transform',
                fromValue: 'translateY(0px)',
                toValue: 'translateY(50px)',
              }
            ]}
            play={false}
          >
            <img style={{
                maxHeight: '90%',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
            }} src="assets/img/intro-graphic.png" alt="intro graphic" />
          </CreateAnimation>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonNavLink routerDirection="forward" component={() => <Survey1 />}>
            <IonButton
              expand="block"
              fill="solid"
              color="primary"
              shape="round"
              size="large"
            >
              Start the survey
            </IonButton>
          </IonNavLink>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default SurveyIntro;
