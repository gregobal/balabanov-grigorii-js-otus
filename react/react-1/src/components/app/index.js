import React, {Component} from 'react';

import CitySelect from '../city-select';
import ApiService from '../../services/api-service';
import Spinner from "../spinner";
import CityWeather from "../city-weather";
import Favorites from "../favorites";

class App extends Component {
  state = {
    weatherData: null,
    isLoading: false,
    city: '',
    favorites: []
  };

  componentDidMount() {
    const apiService = new ApiService();

    this.setState({
      isLoading: true
    });

    apiService.getData()
      .then(data => {
        this.setState({
          isLoading: false,
          weatherData: data
        })
      })
  }

  onSelectChange = value => {
    this.setState({
        city: value,
      }
    )
  };

  onClickFavorites = value => {
    const arr = this.state.favorites.slice();

    if (arr.indexOf(value) === -1) {
      arr.push(value);
      this.setState({
        favorites: arr
      })
    }
  };

  onClickFavoriteDelete = value => {
    this.setState(({favorites}) => {
      const arr = favorites.slice();
      const i = arr.indexOf(value);

      arr.splice(i, 1);

      return {
        favorites: arr
      }
    })
  };

  render() {
    const {weatherData, isLoading, city, favorites} = this.state;

    return (
      <div className="container jumbotron">
        <header>
          <h1 className="text-right text-light">WeatherApp</h1>
          <hr/>
        </header>
        {isLoading && <Spinner/>}
        <main className="row">
          <aside className="col-4 text-center">
            {Array.isArray(weatherData) &&
            <CitySelect
              data={weatherData}
              onSelectChange={this.onSelectChange}
              onClickFavorites={this.onClickFavorites}
              city={this.state.city}
            />
            }
            <Favorites
              favorites={favorites}
              onSelectChange={this.onSelectChange}
              onClickFavoriteDelete={this.onClickFavoriteDelete}
            />
          </aside>
          <section className="col-8">
            {city !== '' && <CityWeather data={this.state.weatherData.filter(item => item.city === city)[0]}/>}
          </section>
        </main>
      </div>
    )
  }
}

export default App;
