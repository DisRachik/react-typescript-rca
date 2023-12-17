import { useRef, useState } from 'react';
import { PropsInput } from './TextInput.types';

export function TextInput({ initialValue, onSave }: PropsInput) {
  /*-----  -----*/
  /*----- typification for UseState on the example of input -----*/
  /*-----  -----*/
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSave = () => {
    onSave(value);
    console.log(value);
  };

  /*-----  -----*/
  /*----- typification for UseRef -----*/
  /*-----  -----*/
  const inputEl = useRef<HTMLInputElement>(null);

  const onBtnClickForRef = () => {
    inputEl.current?.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" value={value} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onBtnClickForRef}>Set input focus</button>
    </div>
  );
}
