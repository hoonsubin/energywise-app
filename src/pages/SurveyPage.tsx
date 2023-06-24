import { IonNav } from '@ionic/react';
import Survey1 from '../components/survey/Survey1';

const SurveyPage: React.FC = () => {
  return <IonNav root={() => <Survey1 />} />;
};

export default SurveyPage;
