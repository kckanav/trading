import logo from './logo.svg';

import React from 'react';
import ZerodhaConnect from './components/ZerodhaConnect';
import RouterComponent from './components/router'
import TradingPage from './components/tradingPage';
import './styles/App.css';
import {useSearchParams} from "react-router-dom"


function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const val = searchParams.get("request_token");
  if (val == null) {
    return (
      <div>
        <ZerodhaConnect />
      </div>
    )
  } else {
    return (
      <div>
        <TradingPage />
      </div>
    )
  }
}

export default App;

