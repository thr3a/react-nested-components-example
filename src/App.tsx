import { TextInput } from '@mantine/core';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <>
      <MyInput
        label="First input"
        value={text}
        onChange={handleChange}
      />
      <MyInput
        label="Second input"
        value={text}
        onChange={handleChange}
      />
      { text }
    </>
  );
}

type Props = {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const MyInput = ({ label, value, onChange }: Props) => {
  return (
    <TextInput value={value} onChange={onChange} label={label}>
    </TextInput>
  );
}
