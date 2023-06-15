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
} from "@ionic/react";
import ChargingKitItem from "../components/ChargingKitItem";

import { mockChargingStation } from "../data/mock";

const pageName = "EV Stations";

const ChargingKitListPage: React.FC = () => {
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
        <IonList>
          <IonListHeader>
            <IonLabel>Choose your Offer</IonLabel>
          </IonListHeader>
          {/* todo: add item filtering based on keywords and tags */}
          {mockChargingStation.map((i) => (
            <ChargingKitItem itemData={i} key={i.description} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ChargingKitListPage;
