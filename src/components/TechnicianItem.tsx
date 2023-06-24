import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonGrid,
  IonCol,
  IonRow,
  IonImg,
  IonChip,
  IonText,
} from '@ionic/react';
import { StationTechnician } from '../types';
import { call, home, mail, laptopOutline } from 'ionicons/icons';

type TechnicianItemProps = {
  itemData: StationTechnician;
};

const TechnicianItem: React.FC<TechnicianItemProps> = (props) => {
  return (
    <IonItem>
      {/* todo: make the card size stretch across the page (fixed width) */}
      <IonCard>
        <IonGrid>
          <IonRow class="ion-align-items-center">
            <IonCol>
              <IonRow>
                <IonCardHeader>
                  <IonCardTitle>
                    <b>{props.itemData.name}</b>
                  </IonCardTitle>
                  <IonCardSubtitle>
                    <IonChip>
                      <IonIcon icon={home} color="primary" />
                      <IonLabel>{props.itemData.address}</IonLabel>
                    </IonChip>
                    <IonChip
                      onClick={() => {
                        window.open('tel:' + props.itemData.phoneNo);
                      }}
                    >
                      <IonIcon icon={call} color="primary" />
                      <IonLabel>{props.itemData.phoneNo}</IonLabel>
                    </IonChip>
                    <IonChip
                      onClick={() => {
                        window.open('mailto:' + props.itemData.email);
                      }}
                    >
                      <IonIcon icon={mail} color="primary" />
                      <IonLabel>{props.itemData.email}</IonLabel>
                    </IonChip>
                  </IonCardSubtitle>
                </IonCardHeader>
              </IonRow>
              <IonRow>
                <IonCardContent>
                  <a
                    target="_blank"
                    href={props.itemData.website}
                    rel="noopener noreferrer"
                  >
                    <IonText>
                      <p>
                        {' '}
                        <IonIcon icon={laptopOutline} color="primary" />
                        {props.itemData.website}
                      </p>
                    </IonText>
                  </a>
                </IonCardContent>
              </IonRow>
            </IonCol>

            {props.itemData.image && (
              <IonCol>
                {/* todo: fix the image size and position so it's fluid */}
                <IonImg
                  src={props.itemData.image}
                  alt="technician company image"
                ></IonImg>
              </IonCol>
            )}
          </IonRow>
        </IonGrid>
      </IonCard>
    </IonItem>
  );
};

export default TechnicianItem;
