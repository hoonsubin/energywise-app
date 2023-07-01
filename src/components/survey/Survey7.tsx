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
import { useHistory } from 'react-router-dom';

const surveyOptions = ['Very important', 'Somewhat important', 'Not important'];

const Survey7: React.FC = () => {
  const history = useHistory();

  const [answer, setAnswer] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextButton = useCallback(() => {
    history.push('/station');
    console.log(answer);
  }, [answer]);

  return (
    <SurveyBase
      progress={1}
      title="Q7: Software Features 2/2"
      nextButtonDisabled={!answer}
      nextButtonOnClick={nextButton}
      nextButtonText="Finish"
    >
      <IonItem color="primary" className="item-text-wrap">
        <IonLabel>
          How important is to know which features does the App has? Which App
          features are more relevant for you?
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
          Understanding the significance of mobile app integration helps
          identify charging stations that offer convenient monitoring and
          control features.
          <br />
          Those are the most important features:
          <br />
          <ul>
            <li>
              Real-time Monitoring: Users can view the current charging status
              of their electric vehicle, including the charging rate, charging
              time, and battery level, directly from their mobile app. This
              provides visibility and allows users to stay informed about their
              charging progress;
            </li>
            <li>
              Charging Control: Users can start or stop the charging session
              remotely through the mobile app. This feature offers convenience
              and flexibility, enabling users to manage their charging even when
              they are not physically present near the charging station;
            </li>
            <li>
              Notifications and Alerts: The mobile app can send push
              notifications or alerts to users to keep them informed about
              important charging events. This can include notifications when the
              charging session starts or stops, charging is complete, or if any
              issues are detected;
            </li>
            <li>
              Energy Consumption Tracking: The mobile app can provide insights
              into the energy consumption of the charging station and the
              associated costs. Users can monitor their charging history, track
              energy usage over time, and even set energy consumption targets or
              limits;
            </li>
            <li>
              User Authentication and Security: Mobile app integration can
              include user authentication and security features to ensure that
              only authorized users can access and control the charging station.
              This may involve login credentials, biometric authentication, or
              other security measures.
            </li>
          </ul>
        </p>
      </HelperModal>
    </SurveyBase>
  );
};

export default Survey7;
