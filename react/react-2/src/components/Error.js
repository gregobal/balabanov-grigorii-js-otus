import React from 'react';
import {Result} from 'antd';


const Error = () => {
  return (
    <Result
      style={{height: '217px'}}
      status="error"
      title="Сломалось"
      subTitle="Что-то пошло не так и исправят видимо когда-нибудь"
    />
  )
};

export default Error
