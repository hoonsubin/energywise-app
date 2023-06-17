import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonListHeader,
  IonLabel,
} from '@ionic/react';
import ChargingKitItem from '../components/ChargingKitItem';

import { mockChargingStation } from '../data/mock';

const pageName = 'Technicians';

const TechnicianListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{pageName}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{pageName}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLabel>Implement the technician page</IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default TechnicianListPage;
