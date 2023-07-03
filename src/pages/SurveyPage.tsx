import { IonNav } from '@ionic/react';
import SurveyIntro from '../components/survey/SurveyIntro';

const SurveyPage: React.FC = () => {
  return <IonNav root={() => <SurveyIntro />} />;
};

export default SurveyPage;
