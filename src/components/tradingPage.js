import React, { useState } from 'react';
import {useLocation} from "react-router-dom";

function TradingPage() {

    const location = useLocation();
    const parameter = new URLSearchParams(location.search);
    const value = parameter.get('request_token');

    var KiteConnect = require("kiteconnect").KiteConnect;
    var kc = new KiteConnect({
        api_key: "qqr6puyjqwfpaqx8",
      });

    kc.generateSession(value, "ajmlygf9ulq5mhu7kdhd0od7llial4xh")
        .then(function (response) {
            init();
        })
        .catch(function (err) {
            console.log(err);
        });
    
    function init() {
        kc.getInstruments(["NFO"])
        .then(function (response) {
            for (let i = 0; i < response.length; i++) {
                if (response[i].strike === 0.0) {
                    console.log(response)
                }
            }
        })
        .catch(function(err){
            console.err(err);
        });
    }

    return (
        <div>
            Cooler stuff coming soon!s
        </div>
    )
}

export default TradingPage;