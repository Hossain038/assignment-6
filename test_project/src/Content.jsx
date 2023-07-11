import React, { useState } from 'react';

const Content = () => {
  const [displayedText, setDisplayedText] = useState('');

  const handleButtonClick = () => {
    const textAreaValue = document.getElementById('text-area').value;
    setDisplayedText(textAreaValue);
  };

  return (
    <main>
      <textarea id="text-area" rows="4" cols="50" />
      <br />
      <button onClick={handleButtonClick}>Display Text</button>
      <br />
      <p>{displayedText}</p>
    </main>
  );
}

export default Content;
