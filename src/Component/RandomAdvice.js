import React, { useEffect, useState } from "react";

const RandomAdvice = () => {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    getAdvice();
  }, []);
  const getAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
  };
  return (
    <div>
      <div className="adviceContainer">
        <h1>Advice Generator</h1>
        <p className="advice-text">{advice}</p>
        <button className="btn" onClick={getAdvice}>
          Get Advice
        </button>
      </div>
    </div>
  );
};

export default RandomAdvice;
