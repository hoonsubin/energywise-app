import {
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonListHeader,
  IonText,
  IonLoading,
  IonItem,
  IonInput,
} from '@ionic/react';
import { useMemo, useState, useCallback, useEffect } from 'react';
import TechnicianItem from '../components/TechnicianItem';
import PostCodeInput from '../components/PostCodeInput';
import { mockTechnicianData } from '../data/mock';
import { useJsApiLoader } from '@react-google-maps/api';

const pageName = 'Technicians';

const googleMapsLib = ['geometry'];

type UserLocInfo = {
  postCode: number;
  city: string;
  location?: google.maps.LatLng;
};

const TechnicianListPage: React.FC = () => {
  const [userLoc, setUserLoc] = useState<UserLocInfo>({
    postCode: 0,
    city: '',
  });

  const { isLoaded } = useJsApiLoader({
    id: 'google-maps',
    googleMapsApiKey: 'AIzaSyDlnRPmNS-FuJ7I2jKVnGkx45gXwVD_01Y',
    libraries: googleMapsLib as any,
  });

  const geocoder = useMemo(() => {
    if (isLoaded) {
      return new window.google.maps.Geocoder();
    }
  }, [isLoaded]);

  const technicianData = useMemo(() => {
    // todo: refactor this fetch data remotely or from a full dataset.
    return mockTechnicianData;
  }, []);

  const inputUserLoc = (input: UserLocInfo) => {
    getLngLatFromAddr(`${input.postCode} ${input.city}`)
      .then((loc) => {
        setUserLoc({
          ...input,
          location: loc,
        });

        console.log(
          `The user is based in ${userLoc.postCode} ${
            userLoc.city
          } with the coordinates of ${loc.toString()}`
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getLngLatFromAddr = useCallback(
    async (address: string) => {
      if (geocoder && isLoaded) {
        const location = await geocoder.geocode({
          address: address,
        });
        // we assume the first result is the best result
        return location.results[0].geometry.location;
      } else {
        throw new Error('Google Maps API not loaded');
      }
    },
    [isLoaded, geocoder]
  );

  return (
    <IonPage>
      {/* todo: implement a location based tagging system.
      The user can input their post code or the device detects the address via gio location. */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{pageName}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{pageName}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {geocoder && isLoaded ? (
          <>
            {userLoc.location ? (
              <IonList>
                <IonListHeader>
                  <IonText>
                    <h2>Technicians Near Your Area</h2>
                  </IonText>
                </IonListHeader>
                {/* todo: add item filtering based on keywords and tags */}
                {technicianData.map((i) => (
                  <TechnicianItem itemData={i} key={i.id} />
                ))}
              </IonList>
            ) : (
              <IonList>
                {/* todo: implement user location input field */}
                <IonItem>
                  <IonInput
                    label="City"
                    placeholder="Munich"
                    onIonInput={(e) =>
                      setUserLoc({
                        ...userLoc,
                        city: e.target.value as string,
                      })
                    }
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <PostCodeInput
                    label="Post Code"
                    placeHolder="80335"
                    onChange={(i) =>
                      setUserLoc({ ...userLoc, postCode: parseInt(i) })
                    }
                  />
                </IonItem>
                <IonItem>
                  <IonButton
                    size="large"
                    shape="round"
                    onClick={() => inputUserLoc(userLoc)}
                    disabled={!userLoc.city || !userLoc.postCode}
                  >
                    Search
                  </IonButton>
                </IonItem>
              </IonList>
            )}
          </>
        ) : (
          <IonLoading message="Loading the API" />
        )}
      </IonContent>
    </IonPage>
  );
};

export default TechnicianListPage;
