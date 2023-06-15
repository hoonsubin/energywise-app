import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ChargingKitItem from "../components/ChargingKitItem";

const mockData = [
  {
    name: "Hello world",
    icon: "hey",
    priceRange: [30.5, 69] as [number, number],
    power: "510",
  },
  {
    name: "Hello to you",
    icon: "yo",
    priceRange: [40.5, 79] as [number, number],
    power: "660",
  },
];

const ChargingKitListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>EV Stations</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">EV Stations</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Change this to a list parsing later */}
        <ChargingKitItem itemData={mockData[0]} />
        <ChargingKitItem
          itemData={mockData[1]}
        />
      </IonContent>
    </IonPage>
  );
};

export default ChargingKitListPage;
