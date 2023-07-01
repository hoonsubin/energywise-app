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
import Survey5 from './Survey5';

const surveyOptions = ['No preference', 'Ethernet', 'Bluetooth', 'WLAN', '4G'];

const Survey4: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextButton = () => useCallback(() => {
    console.log(answer);
  }, [answer]);

  return (
    <SurveyBase
      progress={0.5}
      title="Q4: Connectivity"
      nextButtonDisabled={!answer}
      nextButtonOnClick={nextButton}
      nextPage={() => <Survey5 />}
    >
      <IonItem color="primary" className="item-text-wrap">
        <IonLabel>
          If Connectivity is important for you, please select the types of
          connection that you want the Charging station to have.
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
        <p>
          Charging Station connectivity is important for many people, therefore,
          is important to understand if is also important to you, so we can
          derive a good CS for your needs.
        </p>
      </HelperModal>
    </SurveyBase>
  );
};

export default Survey4;
