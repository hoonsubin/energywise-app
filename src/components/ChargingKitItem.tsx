import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonButton,
  IonText,
  IonIcon,
  IonGrid,
  IonCol,
  IonRow,
  IonImg,
  IonChip,
} from "@ionic/react";
import { ChargingKit } from "../types";
import { batteryCharging } from "ionicons/icons";

type ChargingKitItemProps = ChargingKit;

const ChargingKitItem: React.FC<{ itemData: ChargingKitItemProps }> = (
  props
) => {
  return (
    <IonItem>
      {/* todo: make the card size stretch across the page (fixed width) */}
      <IonCard>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonRow>
                <IonCardHeader>
                  <p>Must buy!</p>
                  <IonCardTitle>{props.itemData.name}</IonCardTitle>
                  <IonCardSubtitle>
                    <div>
                      <IonIcon icon={batteryCharging} color="primary" />
                      {props.itemData.energy.wattage} Watts
                    </div>
                  </IonCardSubtitle>
                </IonCardHeader>
              </IonRow>
              <IonRow>
                <IonCardContent>
                  <IonText color="primary">
                    <h2>
                      {props.itemData.priceRange[0]} ~{" "}
                      {props.itemData.priceRange[1]} EUR
                    </h2>
                  </IonText>
                  <div>
                    {props.itemData.features.map((i) => <IonChip color="primary">{i}</IonChip>)}
                  </div>
                  <IonText color="secondary">
                    <p>
                      {props.itemData.description ||
                        "No description for this item."}
                    </p>
                  </IonText>
                </IonCardContent>
              </IonRow>
            </IonCol>

            <IonCol>
              {/* todo: adjust image size */}
              <IonImg
                src="https://docs-demo.ionic.io/assets/madison.jpg"
                alt="The Wisconsin State Capitol building in Madison, WI at night"
              ></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                onClick={() => {
                  console.log(
                    "Going to the details page for " + props.itemData.name
                  );
                }}
              >
                Details
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
    </IonItem>
  );
};

export default ChargingKitItem;
