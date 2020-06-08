import React, { Component, useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Card from "./components/card";
//import background from "./resources/images/background.svg";

function App() {
  const ApiURL =
    "https://script.googleusercontent.com/macros/echo?user_content_key=dQbNAtHh65dXG4RWls5jMvjigK3yXWZsvfAaAaIfUbw3eOdPINuMelvondOJ2_Y9_xY7WZIUwUeiq5WOPyJKEL7_kt_3hy6wm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJcoRz04cyMtW5PrmiZuv6POB6P41r7KH9Ma4MzR6dhDrQ13P_cJE0rZSuF-XaS7JBh6enHkY3T4&lib=MqBRxvNsnUJqSmQdHLFLwIkIFcHaUiIJP";
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    var result = fetch(ApiURL)
      .then(response => response.json())
      .then(d => setJogos(d.filter(item => item.game.length > 0)));
  }, []);

  return (
    <>
      <Header />
      <div className="background">
        <div className="page">
          <div className="gameContainer">
            {jogos.map(jogo => (
              <Card jogo={jogo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
