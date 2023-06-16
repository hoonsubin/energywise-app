import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { mockChargingStationData } from "../data/mock";
import { useMemo } from "react";
import { useParams, useHistory } from "react-router";
import { arrowBack } from "ionicons/icons";

type ChargingKitListPageProps = {
  filters?: string[];
};

// todo: create a function that uses the `filters` prop to filter the results.

const BackButton = () => {
  const history = useHistory();
  return (
    <IonButton fill="clear" onClick={() => history.go(-1)}>
      <IonIcon slot="icon-only" icon={arrowBack} />
    </IonButton>
  );
};

const ChargingKitDetailPage: React.FC<ChargingKitListPageProps> = (props) => {
  const { id } = useParams<{ id: string }>();

  const stationData = useMemo(() => {
    // todo: refactor this fetch data remotely or from a full dataset.
    return mockChargingStationData;
  }, []);

  const pageName = useMemo(() => {
    return stationData.filter((i) => i.id === parseInt(id))[0].name;
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
            <BackButton />
          </IonButtons>
          <IonTitle>{pageName}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{pageName}</IonTitle>
            <BackButton />
          </IonToolbar>
        </IonHeader>
        <IonLabel>Looking at item {pageName}</IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default ChargingKitDetailPage;
