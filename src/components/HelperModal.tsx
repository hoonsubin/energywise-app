import {
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
  IonModal,
  IonHeader,
  IonToolbar,
} from '@ionic/react';

import { useCallback } from 'react';

type HelperModalProps = {
  title: string;
  isOpen: boolean;
  onClickDismiss?: () => void;
  children: React.ReactElement[] | React.ReactElement;
};

const HelperModal: React.FC<HelperModalProps> = (props) => {

  const handleDismiss = useCallback(() => {
    console.log('clicked dismiss');
    props.onClickDismiss && props.onClickDismiss();
  }, [props.onClickDismiss]);

  return (
    <IonModal isOpen={props.isOpen} onIonModalDidDismiss={handleDismiss}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{props.title}</IonTitle>
          <IonButtons slot="end">
            {/* todo: Fix the button behavior. For some reason clicking this won't do anything */}
            <IonButton onClick={handleDismiss}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {Array.isArray(props.children)
          ? props.children.map((e) => e)
          : props.children}
        <IonButton onClick={handleDismiss}>Close</IonButton>
      </IonContent>
    </IonModal>
  );
};

export default HelperModal;
