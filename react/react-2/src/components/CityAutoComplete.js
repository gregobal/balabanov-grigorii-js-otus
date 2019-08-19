import React, {useState, useContext} from 'react';
import {withRouter} from 'react-router-dom';
import cities from '../utils/cities';
import {Icon, Input, AutoComplete} from 'antd';
import {SetCityContext} from './Context';


const {Option} = AutoComplete;
const options = arr => arr.map(city =>
  (<Option key={city[0] + city[2]} value={city.join('|')} label={city[0]}>{city[0]} ({city[1]})</Option>));

const topCities = ["Москва", "Санкт-Петербург", "Екатеринбург", "Владивосток", "Сочи", "Новосибирск", "Казань", "Уфа",
  "Хабаровск", "Красноярск"]
  .map(topCity => cities.find(city => city[0] === topCity));

const CityAutoComplete = ({history}) => {
  const setCity = useContext(SetCityContext);
  const [dataSource, setDataSource] = useState(options(topCities));

  const handleSearch = value => {
    if (value.length > 0) {
      const arr = cities.filter(city =>
        city[0].slice(0, value.length).toLowerCase() === value.toLowerCase());
      setDataSource(options(arr));
    } else {
      setDataSource(options(topCities))
    }
  };

  return (
    <div style={{width: 300}}>
      <AutoComplete
        disabled={history.location.pathname !== '/'}
        allowClear
        autoFocus
        style={{width: '100%'}}
        dataSource={dataSource}
        onSearch={handleSearch}
        optionLabelProp="label"
        onSelect={value => setCity(value.split('|'))}
      >
        <Input
          prefix={<Icon type="search"/>}
          placeholder="Поиск и выбор города"
        />
      </AutoComplete>
    </div>
  );
};

export default withRouter(CityAutoComplete);
