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
import { mockChargingStationData } from '../data/mock';
import { useMemo } from 'react';

type ChargingKitListPageProps = {
  filters?: string[];
};

const pageName = 'EV Stations';

// todo: create a function that uses the `filters` prop to filter the results.

const ChargingKitListPage: React.FC<ChargingKitListPageProps> = (props) => {
  const stationData = useMemo(() => {
    // todo: refactor this fetch data remotely or from a full dataset.
    return mockChargingStationData;
  }, []);

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
          {stationData.map((i) => (
            <ChargingKitItem itemData={i} key={i.id} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ChargingKitListPage;
