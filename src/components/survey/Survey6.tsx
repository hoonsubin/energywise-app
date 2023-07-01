import SurveyBase from './SurveyBase';
import {
  IonItem,
  IonRadioGroup,
  IonRadio,
  IonLabel,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { useState, useCallback } from 'react';
import { help } from 'ionicons/icons';
import HelperModal from '../HelperModal';
import Survey7 from './Survey7';

const surveyOptions = [
  'Integration with Smart Home',
  'Integration with PVs',
  'Mobile app integration',
  'Smart charging capabilities (Charging in low peak times)',
];

const Survey6: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextButton = () => useCallback(() => {
    console.log(answer);
  }, [answer]);

  return (
    <SurveyBase
      progress={0.8}
      title="Q6: Software Features 1/2"
      nextButtonDisabled={!answer}
      nextButtonOnClick={nextButton}
      nextPage={() => <Survey7 />}
    >
      <IonItem color="primary" className="item-text-wrap">
        <IonLabel>Which features are important to you?</IonLabel>
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
          Understanding your preferences helps in recommending charging stations
          with the desired functionality.
        </p>
      </HelperModal>
    </SurveyBase>
  );
};

export default Survey6;
