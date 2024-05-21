import { useState } from "react";

export const ClearMock = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = () => {
      setInputValue("");
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = {
        escola: inputValue
      };
      console.log(JSON.stringify(data));
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
          <button type="reset" onClick={handleInputChange}>Limpar</button>         
        </form>
      </div>
    );
};

