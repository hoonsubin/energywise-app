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
import Survey2 from './Survey2';
import { help } from 'ionicons/icons';
import HelperModal from '../HelperModal';

const carOptions = ['Tesla', 'Toyota', 'BMW', 'VolksWagen'];

const Survey1: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextButton = useCallback(() => {
    console.log(answer);
  }, [answer]);

  return (
    <SurveyBase
      progress={0.1}
      title="Q1: Vehicle Compatibility"
      nextButtonDisabled={!answer}
      nextButtonOnClick={nextButton}
      nextPage={() => <Survey2 />}
      questionPosition='first'
    >
      <IonItem color="primary" className="item-text-wrap">
        <IonLabel>
          What is the brand and model of your electric vehicle?
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
      <HelperModal
        isOpen={isModalOpen}
        title="Tips"
        onClickDismiss={() => {
          setIsModalOpen(!isModalOpen);
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

export default Survey1;
