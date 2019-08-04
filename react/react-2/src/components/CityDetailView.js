import React, {Fragment, useEffect} from 'react';
import {Table, Row, Col} from 'antd';
import withData from './WithData'
import Error from './Error';


const CityDetailView = ({city, data, error, history}) => {
  const columns = [
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
      align: 'center'
    },
    {
      title: 'Температура,°С',
      dataIndex: 'temp',
      key: 'temp',
      align: 'center'
    },
    {
      title: 'Атм.давл.,мм рт.ст.',
      dataIndex: 'pressure',
      key: 'pressure',
      align: 'center'
    },
    {
      title: 'Влажность,%',
      dataIndex: 'humidity',
      key: 'humidity',
      align: 'center'
    },
    {
      title: 'Ветер,м/с',
      dataIndex: 'wind',
      key: 'wind',
      align: 'center'
    }
  ];

  const cleanedData = (data && 'list' in data) && data.list
    .filter(({dt_txt}) => dt_txt.split(' ')[1] === '12:00:00')
    .map(({dt_txt, main, wind}) =>
      ({
        key: dt_txt, date: dt_txt.split(' ')[0], temp: Math.floor(main.temp),
        pressure: Math.floor(main.pressure * 0.75), humidity: main.humidity, wind: Math.floor(wind.speed)
      }));

  useEffect(() => {
    if (!city.length) {
      history.push('/');
    }
  }, [city, history]);

  return error ?
    (<Error/>) :
    (<Fragment>
      <Row type="flex" justify="center">
        <Col><h1>{city[0]}</h1></Col>
      </Row>
      <Table size="middle" columns={columns} dataSource={cleanedData} loading={!data} pagination={false}/>
    </Fragment>)
};

export default withData(CityDetailView)
