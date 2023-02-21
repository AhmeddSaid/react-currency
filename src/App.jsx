import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [amount, setAmount] = useState(1);
  const [EGP, setEGP] = useState();
  const [EUR, setEUR] = useState();
  const [SAR, setSAR] = useState();
  const [CAD, setCAD] = useState();
  const [AUD, setAUD] = useState();
  const [AED, setAED] = useState();
  const [JPY, setJPY] = useState();

  useEffect(() => {
    axios
      .get("https://api.currencyfreaks.com/latest?apikey=fb90ce92bae4423a9430d7dba3842f34")
      .then((res) => {
        // console.log(res);
        return res.data;
      })
      .then((data) => {
        console.log(data);
        setEGP((amount * data.rates.EGP).toFixed(2));
        setEUR((amount * data.rates.EUR).toFixed(2));
        setSAR((amount * data.rates.SAR).toFixed(2));
        setCAD((amount * data.rates.CAD).toFixed(2));
        setAUD((amount * data.rates.AUD).toFixed(2));
        setAED((amount * data.rates.AED).toFixed(2));
        setJPY((amount * data.rates.JPY).toFixed(2));
      });
  }, [amount]);


  return (
    <div className="app">
      <h1 className="title">
        Currency <span>Converter</span>
      </h1>
      <input
        type="number"
        className="amount"
        placeholder="1$"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <div className="output">
        <div className="converted">
          {EGP}
          <span className="name"> EGP</span>
        </div>
        <div className="converted">
          {EUR}
          <span className="name"> EUR</span>
        </div>
        <div className="converted">
          {SAR}
          <span className="name"> SAR</span>
        </div>
        <div className="converted">
          {CAD}
          <span className="name"> CAD</span>
        </div>
        <div className="converted">
          {AUD}
          <span className="name"> AUD</span>
        </div>
        <div className="converted">
          {AED}
          <span className="name"> AED</span>
        </div>
        <div className="converted">
          {JPY}
          <span className="name"> JPY</span>
        </div>
      </div>
    </div>
  );
};

export default App;
