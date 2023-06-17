import { IonIcon, IonButton } from '@ionic/react';
import { useHistory } from 'react-router';
import { arrowBack } from 'ionicons/icons';

const BackButton: React.FC = () => {
  const history = useHistory();
  return (
    <IonButton fill="clear" onClick={() => history.go(-1)}>
      <IonIcon slot="icon-only" icon={arrowBack} />
    </IonButton>
  );
};

export default BackButton;
