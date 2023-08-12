import logo from './logo.svg';

import React from 'react';
import ZerodhaConnect from './ZerodhaConnect';
import RouterComponent from './components/router'
import './styles/App.css';
import {useSearchParams} from "react-router-dom"


function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const val = searchParams.get("request_token");
  console.log(val);
  return (
    <div className="container">
      <ZerodhaConnect />
      <RouterComponent />
    </div>
  );
}

export default App;

