import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonButton,
  IonText,
} from "@ionic/react";

interface ChargingKitItemProps {
  name: string;
  icon: string;
  priceRange: [number, number];
  power: string;
}

const ChargingKitItem: React.FC<{ itemData: ChargingKitItemProps }> = (
  props
) => {
  return (
    <IonItem>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{props.itemData.name}</IonCardTitle>
          <IonCardSubtitle>{props.itemData.power} Watts</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          <IonText color="primary">
            <h2>
              {props.itemData.priceRange[0]} ~ {props.itemData.priceRange[1]} EUR
            </h2>
          </IonText>
          <IonText color="secondary">
            <p>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </p>
          </IonText>
        </IonCardContent>
        <IonButton>Purchase</IonButton>
      </IonCard>
    </IonItem>
  );
};

export default ChargingKitItem;
