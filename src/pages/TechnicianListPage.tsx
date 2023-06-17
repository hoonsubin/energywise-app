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
  IonText,
} from '@ionic/react';
import TechnicianItem from '../components/TechnicianItem';
import { mockTechnicianData } from '../data/mock';

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
        <IonList>
          <IonListHeader>
            <IonText>
              <h2>Technicians Near Your Area</h2>
            </IonText>
          </IonListHeader>
          {/* todo: add item filtering based on keywords and tags */}
          {mockTechnicianData.map((i) => (
            <TechnicianItem itemData={i} key={i.id} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TechnicianListPage;
