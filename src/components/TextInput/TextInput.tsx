import { useState } from 'react';
import { PropsInput } from './TextInput.types';

export function TextInput({ initialValue, onSave }: PropsInput) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSave = () => {
    onSave(value);
    console.log(value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
