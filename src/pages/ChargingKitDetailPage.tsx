import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonText,
  IonChip,
} from '@ionic/react';
import { mockChargingStationData } from '../data/mock';
import { useMemo } from 'react';
import { useParams } from 'react-router';
import BackButton from '../components/BackButton';
import { ChargingKit } from '../types';
import './ChargingKitDetailPage.css';

type ChargingKitListPageProps = {
  filters?: string[];
};

// todo: create a function that uses the `filters` prop to filter the results.

type ItemInfoProps = {
  data: ChargingKit;
};

const ItemInfo: React.FC<ItemInfoProps> = ({ data }) => {
  return (
    <>
      <IonRow>
        <IonCol>
          <IonText>
            <h3>Features</h3>
          </IonText>
        </IonCol>
        <IonCol>
          {data.features.map((i) => (
            <IonChip color="secondary">{i}</IonChip>
          ))}
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonText>
            <h3>Charging Power</h3>
          </IonText>
        </IonCol>
        <IonCol>
          <IonChip color="primary">{data.energy.power} kW</IonChip>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonText>
            <h3>Voltage</h3>
          </IonText>
        </IonCol>
        <IonCol>
          <IonChip color="primary">
            {data.energy.voltage} Volts{' '}
            {data.energy.phase === 'single' ? 'Single Phase' : 'Triple Phase'}
          </IonChip>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonText>
            <h3>Cable</h3>
          </IonText>
        </IonCol>
        <IonCol>
          <IonChip color="primary">
            {data.size.cableLength[0]} cm ~ {data.size.cableLength[1]} cm
          </IonChip>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonText>
            <h3>Installation Option</h3>
          </IonText>
        </IonCol>
        <IonCol>
          <IonChip color="primary">{data.energy.power} kW</IonChip>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonText>
            <h3>Size</h3>
          </IonText>
        </IonCol>
        <IonCol>
          <IonChip color="primary">
            {data.size.height} x {data.size.width} x {data.size.weight} mm
            (B/H/T)
          </IonChip>
        </IonCol>
      </IonRow>
    </>
  );
};

const ChargingKitDetailPage: React.FC<ChargingKitListPageProps> = (props) => {
  const { id } = useParams<{ id: string }>();

  const pageData = useMemo(() => {
    // todo: refactor this fetch data remotely or from a full dataset.
    // note: I know this is horrible for performance. But for a static db, it gets the job done.
    return mockChargingStationData.filter(
      (i) => i.id === parseInt(id)
    )[0] as ChargingKit;
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
            <IonButtons slot="start">
              <BackButton />
            </IonButtons>
            <IonTitle size="large">{pageName}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonCard>
            <img src={pageData.image} alt="station image" />
            <IonCardHeader>
              <IonCardTitle>{pageData.name}</IonCardTitle>
              <IonCardSubtitle>Charging Station</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <IonRow>
            <IonCol>
              <IonText>
                <h3>Description</h3>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonText>
              <p>{pageData.description}</p>
            </IonText>
          </IonRow>
          <ItemInfo data={pageData} />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ChargingKitDetailPage;
