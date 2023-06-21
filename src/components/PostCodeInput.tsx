import { IonInput } from '@ionic/react';
import { useState, useRef } from 'react';

type PostCodeInputProps = {
  onChange?: (input: string) => void;
  label: string;
  placeHolder: string;
};

const PostCodeInput: React.FC<PostCodeInputProps> = (props) => {
  const [inputModel, setInputModel] = useState('');
  const ionInputEl = useRef<HTMLIonInputElement>(null);

  const handleInput = (ev: Event) => {
    const value = (ev.target as HTMLIonInputElement).value as string;

    const filteredValue = value.replace(/[^0-9]+/g, '');

    setInputModel(filteredValue);
    const inputCmp = ionInputEl.current;
    if (inputCmp !== null) {
      inputCmp.value = filteredValue;
      if (props.onChange) {
        props.onChange(filteredValue);
      }
      
    }
  };
  return (
    <IonInput
      label={props.label}
      placeholder={props.placeHolder}
      onIonInput={handleInput}
      value={inputModel}
      ref={ionInputEl}
    ></IonInput>
  );
};

export default PostCodeInput;
