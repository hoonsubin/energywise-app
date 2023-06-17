import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonText,
} from '@ionic/react';
import { mockChargingStationData } from '../data/mock';
import { useMemo } from 'react';
import { useParams } from 'react-router';
import BackButton from '../components/BackButton';
import './ChargingKitDetailPage.css';

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
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <img src={pageData.image} alt="station image" />
                <IonCardHeader>
                  <IonCardTitle>{pageData.name}</IonCardTitle>
                  <IonCardSubtitle>Charging Station</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <img src={pageData.providerImg} alt="provider logo" />
                <IonCardHeader>
                  <IonCardTitle>{pageData.provider}</IonCardTitle>
                  <IonCardSubtitle>Installation</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            {/* todo: Add item description */}
            <IonText>hello</IonText>
          </IonRow>
          <IonRow>
            <IonLabel>world</IonLabel>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ChargingKitDetailPage;
