import SurveyBase from './SurveyBase';
import {
  IonItem,
  IonRadioGroup,
  IonRadio,
  IonLabel,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { useState } from 'react';
import { help } from 'ionicons/icons';
import HelperModal from '../HelperModal';
import Survey3 from './Survey3';

const surveyOptions = [
  'Housewall',
  'Garage (inside)',
  'Garage (outside)',
  'carport',
  'free-standing charging station (outside)',
  'free-standing charging station (inside)',
];

const Survey2: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextButton = () => {
    console.log(answer);
  };

  return (
    <SurveyBase
      progress={0.2}
      title="Q2: Charging Location"
      nextButtonDisabled={!answer}
      nextButtonOnClick={nextButton}
      nextPage={() => <Survey3 />}
    >
      <IonItem color="primary" className="item-text-wrap">
        <IonLabel>Where should the charging station be installed?</IonLabel>
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
        <p>
          Identifying your specific vehicle model ensures compatibility between
          the charging station and your EV.
        </p>
      </HelperModal>
    </SurveyBase>
  );
};

export default Survey2;
