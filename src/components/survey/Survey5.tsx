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
import Survey6 from './Survey6';

const surveyOptions = [
  'Less than 500€',
  '500€ - 1.000€',
  '1.000€ - 2.000€',
  'More than 2.000€',
];

const Survey5: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextButton = () => {
    console.log(answer);
  };

  return (
    <SurveyBase
      progress={0.7}
      title="Q5: Budget"
      nextButtonDisabled={!answer}
      nextButtonOnClick={nextButton}
      nextPage={() => <Survey6 />}
    >
      <IonItem color="primary" className="item-text-wrap">
        <IonLabel>What is your budget range for the charging station?</IonLabel>
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
          Understanding your budget helps in recommending charging station
          options that fit within your financial considerations.
          <br />
          What costs might occur:
          <ul>
            <li>
              Upfront Cost: The initial cost of the charging station is an
              important consideration. Different charging station models may
              vary in price based on their features, charging speed, and brand.
              It's essential to find a charging station that fits within your
              budget while still meeting your requirements. Installation Costs:
              In addition to the charging station itself, there may be
              installation costs to consider. This includes any electrical work
              or modifications needed to set up the charging station at your
              desired location. It's important to factor in these installation
              costs when planning your budget.
            </li>
            <li>
              Operational Costs: While charging an electric vehicle is generally
              more cost-effective than fueling a traditional gasoline vehicle,
              it's important to consider the ongoing operational costs. This
              includes the cost of electricity needed for charging and any
              associated maintenance or subscription fees for accessing charging
              networks or software services. Return on Investment (ROI): It can
              be beneficial to evaluate the potential ROI of investing in a
              charging station. Consider factors such as your typical driving
              patterns, the cost savings compared to gasoline, and any available
              incentives, grants, or tax credits that can help offset the
              initial investment.
            </li>
            <li>
              Long-Term Cost Savings: Investing in a home charging station can
              lead to long-term cost savings. By charging your electric vehicle
              at home, you can potentially save on public charging fees and have
              more control over your charging expenses. It's important to assess
              the potential cost savings over time and how they align with your
              financial goals.
            </li>
          </ul>
        </p>
      </HelperModal>
    </SurveyBase>
  );
};

export default Survey5;
