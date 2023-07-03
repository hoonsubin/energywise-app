import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
  hammerSharp,
  hammerOutline,
  batteryChargingSharp,
  batteryChargingOutline,
  mailOutline,
  mailSharp,
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

// todo: move this to a `route.ts` file
const appPages: AppPage[] = [
  {
    title: 'Take Survey',
    url: '/survey',
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: 'Station Kits',
    url: '/station',
    iosIcon: batteryChargingOutline,
    mdIcon: batteryChargingSharp,
  },
  {
    title: 'Technicians',
    url: '/technicians',
    iosIcon: hammerOutline,
    mdIcon: hammerSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>
            <h1>energywise</h1>
          </IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? 'selected' : ''
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
