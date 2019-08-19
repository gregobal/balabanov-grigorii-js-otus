import React, {useState, useEffect, useContext} from 'react';
import {Col, Row} from "antd";
import {SetCityContext} from './Context';
import CityCard from "./CityCard";


const storageItemName = 'pogo-da-cities';

function getFromStorage() {
  const cities = JSON.parse(localStorage.getItem(storageItemName)) || [];
  return cities.length ? cities : [["Москва", "Москва", "55.753215", "37.622504"],]
}

const CitiesList = ({cities, deleteCity}) => {
  return (
    <Row type="flex">
      {cities.map(city =>
        (<Col key={city[0] + city[2]}>
          <CityCard city={city} deleteCity={deleteCity}/>
        </Col>)
      )}
    </Row>
  )
};

const CitiesListView = ({city}) => {
  const setCity = useContext(SetCityContext);
  const [cities, setCities] = useState(getFromStorage());

  const deleteCity = city => {
    const cities = getFromStorage();
    const index = cities.findIndex(item => item[0] === city[0] && item[1] === city[1]);
    if (index > -1) {
      cities.splice(index, 1);
      localStorage.setItem(storageItemName, JSON.stringify(cities));
      setCities(getFromStorage());
      setCity([])
    }
  };

  useEffect(() => {
    if (city.length && !cities.find(item => item[0] === city[0] && item[1] === city[1])) {
      const citiesForStorage = cities;
      citiesForStorage.push(city);
      localStorage.setItem(storageItemName, JSON.stringify(citiesForStorage));
      setCities(getFromStorage());
    }
  }, [city, cities]);

  return (
    <CitiesList cities={cities} deleteCity={deleteCity}/>
  )

};

export default CitiesListView;
