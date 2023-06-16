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
  import { mockChargingStationData } from "../data/mock";
  import { useMemo } from "react";
  import { useParams } from 'react-router';
  
  type ChargingKitListPageProps = {
    filters?: string[];
  };
  
  // todo: create a function that uses the `filters` prop to filter the results.
  
  const ChargingKitDetailPage: React.FC<ChargingKitListPageProps> = (props) => {

    const { id } = useParams<{ id: string; }>();

    const stationData = useMemo(() => {
      // todo: refactor this fetch data remotely or from a full dataset.
      return mockChargingStationData;
    }, []);

    const pageName = useMemo(() => {
      return stationData.filter((i) => i.id === parseInt(id))[0].name;
    }, [])
  
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
          <IonLabel>
            Looking at item {pageName}
          </IonLabel>
        </IonContent>
      </IonPage>
    );
  };
  
  export default ChargingKitDetailPage;
  