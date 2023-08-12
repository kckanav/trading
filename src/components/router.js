import React from "react";
import { useLocation } from "react-router-dom";

function RouterComponent () {
    const location = useLocation();
    const parameter = new URLSearchParams(location.search);

    const value = parameter.get('request_token');

    return (
        <div>
            <h1>Parameter value is : {value}</h1>
        </div>
    )
}

export default RouterComponent