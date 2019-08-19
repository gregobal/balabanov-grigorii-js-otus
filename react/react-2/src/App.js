import React, {useState} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {Layout, Row, Col} from 'antd';
import {SetCityContext} from './components/Context'
import CityAutoComplete from './components/CityAutoComplete';
import CitiesListView from './components/CitiesListView';
import CityDetailView from './components/CityDetailView';


const {Header, Footer, Content} = Layout;

const App = () => {
  const [city, setCity] = useState([]);

  return (
    <SetCityContext.Provider value={setCity}>
      <BrowserRouter>
        <Layout>
          <Header style={{backgroundColor: "lightgrey"}}>
            <Row>
              <Col span={1} offset={0}>
                <h1><Link to="/">ПогоДа</Link></h1>
              </Col>
              <Col span={8} offset={8}>
                <CityAutoComplete/>
              </Col>
            </Row>
          </Header>
          <Content style={{background: '#fff'}}>
            <Switch>
              <Route path="/" exact render={(props) => <CitiesListView city={city} {...props} />}/>
              <Route path="/:id?" render={(props) => <CityDetailView city={city} fiveDays {...props} />}/>
            </Switch>
          </Content>
          <Footer>
            <Row type="flex" justify="end">
              <Col>{(new Date()).toLocaleDateString()}</Col>
            </Row>
          </Footer>
        </Layout>
      </BrowserRouter>
    </SetCityContext.Provider>
  )
};

export default App;
