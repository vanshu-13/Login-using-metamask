import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function MyComponent() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [parameterValue, setParameterValue] = useState(
    queryParams.get("paramName") || ""
  );
  const [inputUrl, setInputUrl] = useState("");

  const handleInputChange = (e) => {
    setInputUrl(e.target.value);
  };

  // const handleButtonClick = () => {
  //   const url = new URL(inputUrl);
  //   const newQueryParams = new URLSearchParams(url.search);
  //   const newValue = newQueryParams.get("paramName");
  //   setParameterValue(newValue || "");
  // };
  const handleButtonClick = () => {
    const url = new URL(inputUrl);
    const queryParams = new URLSearchParams(url.search);
    const parameterValue = queryParams.get("q");
    setParameterValue(parameterValue || "");
  };
  

  return (
    <div>
      <h1>Query Parameter: {parameterValue}</h1>
      <input
        type="text"
        value={inputUrl}
        onChange={handleInputChange}
        placeholder="Enter URL"
      />
      <button onClick={handleButtonClick}>Catch Query Parameter</button>
      <p>Catched Query: {parameterValue}</p>
    </div>
  );
}

export default MyComponent;
