import axios from "axios";
import { Card } from "semantic-ui-react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCountries } from "../actions/actions";
import CountryWeather from "./CountryWeather";

// appid: cd612f536b150f426748d4d015893383

// URL :
//api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=cd612f536b150f426748d4d015893383

export default function Page() {
  // Gets the specific state
  const state = useSelector((state) => {
    return state;
  });
  // Allows to dispatch any time
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCountries());
  }, [dispatch]);
  console.log("state ", state);
  return (
    <div>
      <br />
      <h1>Global weather status</h1>
      <hr />
      <br />
      <Card.Group className="myCards">
        {state.map((country, i) => {
          return <CountryWeather key={i + "key"} country={country} />;
        })}
      </Card.Group>
    </div>
  );
}
