import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import ChargingKitListPage from './pages/ChargingKitListPage';
import TechnicianListPage from './pages/TechnicianListPage';
import SurveyPage from './pages/SurveyPage';
import ChargingKitDetailPage from './pages/ChargingKitDetailPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          {/* Always show the menu on the side of the app */}
          <Menu />
          {/* Route the pages based on the URL */}
          <IonRouterOutlet id="main">
            {/* Default page. todo: this should be changed to the survey page for production */}
            <Route path="/" exact>
              <Redirect to="/station" />
            </Route>
            <Route path="/station" exact>
              <ChargingKitListPage />
            </Route>
            <Route path="/station/detail/:id">
              <ChargingKitDetailPage />
              {/* todo: add the details page */}
            </Route>

            {/* todo: need to create all pages */}
            <Route path="/survey" exact>
              <SurveyPage />
            </Route>
            <Route path="/technicians" exact>
              <TechnicianListPage />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
