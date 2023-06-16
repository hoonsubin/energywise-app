import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
} from "@ionic/react";
import { mockChargingStationData } from "../data/mock";
import { useMemo } from "react";
import { useParams } from "react-router";
import BackButton from "../components/BackButton";

type ChargingKitListPageProps = {
  filters?: string[];
};

// todo: create a function that uses the `filters` prop to filter the results.

const ChargingKitDetailPage: React.FC<ChargingKitListPageProps> = (props) => {
  const { id } = useParams<{ id: string }>();

  const pageData = useMemo(() => {
    // todo: refactor this fetch data remotely or from a full dataset.
    // note: I know this is horrible for performance. But for a static db, it gets the job done.
    return mockChargingStationData.filter((i) => i.id === parseInt(id))[0];
  }, []);

  const pageName = useMemo(() => {
    return pageData.name;
  }, [pageData]);

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
