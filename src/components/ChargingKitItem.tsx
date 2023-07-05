import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonButton,
  IonText,
  IonIcon,
  IonGrid,
  IonCol,
  IonRow,
  IonChip,
  IonLabel,
} from '@ionic/react';
import { ChargingKit } from '../types';
import { flash, person } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { useCallback } from 'react';

type ChargingKitItemProps = {
  itemData: ChargingKit;
}

const FeatureTags: React.FC<{ tags: string[] }> = (props) => {
  return (
    <div>
      {props.tags.map((i) => (
        <IonChip color="primary">{i}</IonChip>
      ))}
    </div>
  );
};

const ChargingKitItem: React.FC<ChargingKitItemProps> = (props) => {
  const history = useHistory();

  const handleDetailsButton = useCallback(() => {
    history.push('/station/' + props.itemData.id);
  }, [history]);

  const handleTechButton = useCallback(() => {
    history.push('/technicians');
  }, [history]);

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
                    <IonLabel>
                      {' '}
                      <IonIcon icon={person} color="primary" />
                      {props.itemData.provider}
                    </IonLabel>
                    <IonLabel>
                      {' '}
                      <IonIcon icon={flash} color="primary" />
                      {props.itemData.energy.power} kW
                    </IonLabel>
                  </IonCardSubtitle>
                </IonCardHeader>
              </IonRow>
              <IonRow>
                <IonCardContent>
                  <FeatureTags tags={props.itemData.features} />
                  <IonText color="primary">
                    <h1>
                      <b>
                        {props.itemData.priceRange[0]} ~{' '}
                        {props.itemData.priceRange[1]} EUR
                      </b>
                    </h1>
                  </IonText>
                  <IonText color="secondary">
                    <p>
                      {props.itemData.description ||
                        'No description for this item.'}
                    </p>
                  </IonText>
                </IonCardContent>
              </IonRow>
              <IonButton
                color="primary"
                shape="round"
                fill="solid"
                size="large"
                onClick={(e) => {
                  e.preventDefault();
                  handleDetailsButton();
                }}
              >
                Details
              </IonButton>
              <IonButton
                color="secondary"
                shape="round"
                size="large"
                fill="outline"
                onClick={(e) => {
                  e.preventDefault();
                  handleTechButton();
                }}
              >
                Technicians
              </IonButton>
            </IonCol>

            <IonCol>
              {/* todo: fix the image size and position so it's fluid */}
              <img
                style={{
                  borderRadius: '8px',
                  maxWidth: '100%',
                  height: '50%',
                }}
                src={props.itemData.image}
                alt="station image"
              ></img>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
    </IonItem>
  );
};

export default ChargingKitItem;
