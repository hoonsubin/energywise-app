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
  IonIcon,
} from '@ionic/react';
import { navigate } from 'ionicons/icons';
import { useMemo, useState, useCallback, useEffect } from 'react';
import TechnicianItem from '../components/TechnicianItem';
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
  // todo: bind this value with the text element value
  const [cityInput, setCityInput] = useState('');
  const [postInput, setPostInput] = useState('');
  const [userLocation, setUserLocation] = useState<google.maps.LatLng>();

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

  const getUserLocation = useCallback(() => {
    if ('geolocation' in navigator && geocoder) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Get user location in a formatted data
        const sessionUserLoc = new window.google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );

        geocoder.geocode({ location: sessionUserLoc }, (res) => {
          if (res) {
            // Get the formatted string address based on the input coordinates
            const userAddr = res[0].formatted_address;
            // todo: only works with the German address scheme. We need a smarter way to parse the data.
            const postCodeAndCity = userAddr.split(', ')[1].split(' ');

            console.log(postCodeAndCity.toString());
            setPostInput(postCodeAndCity[0])
            setCityInput(postCodeAndCity[1])
          }
        });
      });
    } else {
      console.warn('Failed to get the device location permission.');
    }
  }, [geocoder]);

  const inputUserLoc = (input: UserLocInfo) => {
    getLngLatFromAddr(`${input.postCode} ${input.city}`)
      .then((loc) => {
        setUserLocation(loc);

        console.log(
          `The user is based in ${input.postCode} ${
            input.city
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
            {userLocation ? (
              <IonList>
                <IonListHeader>
                  <IonText>
                    <h2>Technicians Near Your Area</h2>
                  </IonText>
                </IonListHeader>
                {technicianData.map((i) => (
                  <TechnicianItem itemData={i} key={i.id} />
                ))}
              </IonList>
            ) : (
              <IonList>
                <IonItem>
                  <IonInput
                    label="City"
                    placeholder="Munich"
                    value={cityInput}
                    onIonInput={(e) => {
                      const value = e.target.value as string;
                      setCityInput(value);
                    }}
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonInput
                  type='number'
                    label="Post Code"
                    placeholder="80335"
                    onIonInput={(e) => {
                      const value = e.target.value as string;
                      setPostInput(value);
                    }}
                    value={postInput}
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonButton
                    size="large"
                    shape="round"
                    fill="clear"
                    onClick={() => getUserLocation()}
                  >
                    <IonIcon slot="icon-only" icon={navigate}></IonIcon>
                  </IonButton>
                  <IonButton
                    size="large"
                    shape="round"
                    onClick={() =>
                      inputUserLoc({
                        postCode: parseInt(postInput),
                        city: cityInput,
                      })
                    }
                    disabled={!cityInput || !postInput}
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
