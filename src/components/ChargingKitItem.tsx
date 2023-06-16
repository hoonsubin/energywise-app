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
  IonLabel,
} from "@ionic/react";
import { ChargingKit } from "../types";
import { flash, person } from "ionicons/icons";

type ChargingKitItemProps = ChargingKit;

const FeatureTags: React.FC<{ tags: string[] }> = (props) => {
  return (
    <div>
      {props.tags.map((i) => (
        <IonChip color="primary">{i}</IonChip>
      ))}
    </div>
  );
};

const ChargingKitItem: React.FC<{ itemData: ChargingKitItemProps }> = (
  props
) => {
  return (
    <IonItem>
      {/* todo: make the card size stretch across the page (fixed width) */}
      <IonCard>
        <IonGrid>
          <IonRow class="ion-align-items-center">
            <IonCol>
              <IonRow>
                <IonCardHeader>
                  <IonCardTitle>
                    <b>{props.itemData.name}</b>
                  </IonCardTitle>
                  <IonCardSubtitle>
                    <IonLabel>
                      {" "}
                      <IonIcon icon={person} color="primary" />
                      {props.itemData.provider}
                    </IonLabel>
                    <IonLabel>
                      {" "}
                      <IonIcon icon={flash} color="primary" />
                      {props.itemData.energy.power} kW
                    </IonLabel>
                  </IonCardSubtitle>
                </IonCardHeader>
              </IonRow>
              <IonRow>
                <IonCardContent>
                  <FeatureTags tags={props.itemData.features} />
                  <IonText color="primary">
                    <h1>
                      <b>
                        {props.itemData.priceRange[0]} ~{" "}
                        {props.itemData.priceRange[1]} EUR
                      </b>
                    </h1>
                  </IonText>
                  <IonText color="secondary">
                    <p>
                      {props.itemData.description ||
                        "No description for this item."}
                    </p>
                  </IonText>
                  <IonButton
                    routerLink={"/station/detail/" + props.itemData.id}
                  >
                    Details
                  </IonButton>
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
        </IonGrid>
      </IonCard>
    </IonItem>
  );
};

export default ChargingKitItem;
