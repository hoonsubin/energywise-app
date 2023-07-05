import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import ChargingKitListPage from './pages/ChargingKitListPage';
import ChargingKitDetailPage from './pages/ChargingKitDetailPage';
import TechnicianListPage from './pages/TechnicianListPage';
import SurveyPage from './pages/SurveyPage';
import { createBrowserHistory } from 'history';

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

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactHashRouter history={history}>
        <IonSplitPane contentId="main">
          {/* Always show the menu on the side of the app */}
          <Menu />
          {/* Route the pages based on the URL */}
          <IonRouterOutlet id="main">
            <Route path="/technicians">
              <TechnicianListPage />
            </Route>
            <Route path="/station/:id">
              <ChargingKitDetailPage />
            </Route>
            <Route path="/station" exact>
              <ChargingKitListPage />
            </Route>
            <Route path="/survey">
              <SurveyPage />
            </Route>
            <Route path="/" exact>
              <Redirect to="/survey" />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactHashRouter>
    </IonApp>
  );
};

export default App;
