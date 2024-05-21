import { useState } from 'react';

export const SubmitMock = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      escola: inputValue
    };
    console.log(JSON.stringify(data));
    setInputValue(''); // Limpa o campo de entrada

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">salvar</button>
      </form>
    </div>
  );
};
