import React, { useState } from 'react';
import {useSearchParams} from "react-router-dom"

function ZerodhaConnect() {
  
  const link = "https://kite.zerodha.com/connect/login?";
  const data = {
    'v': 'v',
    'api_key': 'qqr6puyjqwfpaqx8'
  };
  const params = new URLSearchParams(data);
  const url = link + params;
  const test_url = "https://www.facebook.com";
  const onClickToLogin = (event) => {
    event.preventDefault();
    console.log(url);
    window.open(test_url);
  };

  return (
    <div>
      <button onClick={onClickToLogin}>Connect to Zerodha</button>
    </div>
  );
}

export default ZerodhaConnect;
