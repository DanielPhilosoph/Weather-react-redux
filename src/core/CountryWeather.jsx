import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function CountryWeather({ country }) {
  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src={` http://openweathermap.org/img/wn/${country.weather[0].icon}@2x.png`}
        />
        <Card.Header>{country.name}</Card.Header>
        <Card.Meta>
          Weather: {country.weather[0].main} <br /> Description:{" "}
          {country.weather[0].description}
        </Card.Meta>
        <Card.Description>
          Current temperature: {country.main.temp}
          <br />
          Feels like: {country.main.feels_like}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
