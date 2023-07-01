import SurveyBase from './SurveyBase';
import {
  IonItem,
  IonRadioGroup,
  IonRadio,
  IonLabel,
  IonButton,
  IonIcon,
  IonList,
  IonRange,
} from '@ionic/react';
import { useState } from 'react';
import { help, flashOutline, flash } from 'ionicons/icons';
import HelperModal from '../HelperModal';
import Survey4 from './Survey4';

const surveyOptions = [
  '3,7 kW (100km in 4 hours 30 mins)',
  '7,4 kW (100km in 2 hours 15 mins)',
  '11 kW (100km in 1 hour 30 min)',
  '22 kW (100km in 45 min)',
];

const ChargerCalc = () => {
  return (
    <div>
      <IonList>
        <IonItem>
          <IonLabel>Target charging power (kW)</IonLabel>
        </IonItem>
        <IonItem>
          <IonRange>
            <IonIcon slot="start" icon={flashOutline} />
            <IonIcon slot="end" icon={flash} />
          </IonRange>
        </IonItem>
        <IonItem>
          <IonLabel>Estimated charging time</IonLabel>
        </IonItem>
        <IonItem>
          <h1>4 hours</h1>
        </IonItem>
      </IonList>
    </div>
  );
};

const Survey3: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextButton = () => {
    console.log(answer);
  };

  return (
    <SurveyBase
      progress={0.4}
      title="Q3: Charging Speed"
      nextButtonDisabled={!answer}
      nextButtonOnClick={nextButton}
      nextPage={() => <Survey4 />}
    >
      <IonItem color="primary" className="item-text-wrap">
        <IonLabel>
          What should be the charging speed of you charging station?
        </IonLabel>
        <IonButton
          shape="round"
          fill="solid"
          slot="end"
          color="warning"
          onClick={() => setIsModalOpen(true)}
        >
          <IonIcon slot="icon-only" icon={help}></IonIcon>
        </IonButton>
      </IonItem>
      <IonRadioGroup>
        {surveyOptions.map((i) => {
          return (
            <IonItem>
              <IonRadio onClick={() => setAnswer(i)} value={i}>
                {i}
              </IonRadio>
            </IonItem>
          );
        })}
      </IonRadioGroup>
      <HelperModal
        isOpen={isModalOpen}
        title="Tips"
        onClickDismiss={() => {
          console.log('closing');
          setIsModalOpen(false);
        }}
      >
        {/* Add a charger calculator based on https://www.homechargingstations.com/ev-charging-time-calculator/ */}
        {/* User inputs the charging power in kW, and the app outputs the time it takes to charge 100 KMs */}
        <ChargerCalc />
      </HelperModal>
    </SurveyBase>
  );
};

export default Survey3;
