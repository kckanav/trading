import React, { useState } from 'react';

function ZerodhaConnect() {
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleUrlChange = (event) => {
    setRedirectUrl(event.target.value);
  };

  return (
    <div>
      <h1>Connect to Zerodha</h1>
      <button onClick={() => alert('Connecting to Zerodha...')}>Connect to Zerodha</button>
      <h2>Please paste redirect URL here:</h2>
      <input
        type="text"
        value={redirectUrl}
        onChange={handleUrlChange}
        placeholder="Paste URL here..."
      />
    </div>
  );
}

export default ZerodhaConnect;
