import React, {Fragment, useContext} from 'react';
import {Link} from 'react-router-dom';
import {Row, Card, Avatar, Spin, Icon} from 'antd';
import {SetCityContext} from './Context';
import withData from './WithData'
import slugify from '../utils/slugify'
import Error from "./Error";


const CityCard = ({city, data, error, deleteCity}) => {
  const setCity = useContext(SetCityContext);

  return (
    <Card style={{width: 320}}>
      {
        error ?
          (<Error/>) :
          data ?
            (<Fragment>
              <Card.Meta
                avatar={
                  <Avatar shape="square" size={64}
                          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>
                }
                title={
                  <Row type="flex" justify="space-between">
                    <Link
                      to={`/${slugify(city[0])}`}
                      onClick={() => setCity(city)}
                    >{city[0].slice(0, 18)}{city[0].length > 17 && '..'}</Link>
                    <Icon
                      type="close-circle" theme="twoTone"
                      onClick={() => deleteCity(city)}
                    />
                  </Row>
                }
                description={city[1]}
              />
              <br/>
              <p>Температура: {Math.floor(data.main.temp)} °С</p>
              <p>Атм. давление: {Math.floor(data.main.pressure * 0.75)} мм рт.ст.</p>
              <p>Влажность: {data.main.humidity} %</p>
              <p>Ветер: {Math.floor(data.wind.speed)} м/с</p>
            </Fragment>) :
            (<Spin tip="Вгружаю..." style={{margin: "86px 100px"}}/>)
      }
    </Card>
  )
};

export default withData(CityCard)
