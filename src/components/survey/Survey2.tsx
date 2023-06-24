import SurveyBase from './SurveyBase';
import {
  IonItem,
  IonRadioGroup,
  IonRadio,
  IonLabel,
  IonButton,
  IonIcon,
  IonPopover,
  IonContent,
} from '@ionic/react';
import { useState } from 'react';
import { help } from 'ionicons/icons';
const carOptions = [
  'Housewall',
  'Garage (inside)',
  'Garage (outside)',
  'carport',
  'free-standing charging station (outside)',
  'free-standing charging station (inside)',
];

const Survey2: React.FC = () => {
  const [answer, setAnswer] = useState('');

  const nextButton = () => {
    console.log(answer);
  };

  return (
    <SurveyBase
      progress={0.2}
      title="Q2: Charging Location"
      nextButtonDisabled={!answer}
      nextButtonOnClick={nextButton}
    >
      <IonItem color="primary" className="item-text-wrap">
        <IonLabel>Where should the charging station be installed?</IonLabel>
        <IonButton
          shape="round"
          fill="solid"
          slot="end"
          color="warning"
          id="survey2-detail"
        >
          <IonIcon slot="icon-only" icon={help}></IonIcon>
        </IonButton>
        <IonPopover trigger="survey2-detail" triggerAction="click">
          <IonContent class="ion-padding">
            Identifying your specific vehicle model ensures compatibility
            between the charging station and your EV.
          </IonContent>
        </IonPopover>
      </IonItem>
      <IonRadioGroup>
        {carOptions.map((i) => {
          return (
            <IonItem>
              <IonRadio onClick={() => setAnswer(i)} value={i}>
                {i}
              </IonRadio>
            </IonItem>
          );
        })}
      </IonRadioGroup>
    </SurveyBase>
  );
};

export default Survey2;
