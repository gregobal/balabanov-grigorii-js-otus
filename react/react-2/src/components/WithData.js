import React, {Component} from 'react';

const withData = Wrapped => {
  return class extends Component {
    static get displayName() {
      const name = Wrapped.displayName ||
        Wrapped.name || 'Component';
      return `WithDate(${name})`;
    }

    state = {
      data: null,
      error: false
    };

    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      if (this.props.city !== prevProps.city) {
        this.update();
      }
    }

    update() {
      const {city, fiveDays} = this.props;

      if (city.length === 4 && parseFloat(city[2]) && parseFloat(city[3])) {
        const urlParams = 'mode=json&units=metric&lang=ru&appid=e3fb0b77258f9a1408fdc64e00ae3f93';
        const url = fiveDays ?
          `http://api.openweathermap.org/data/2.5/forecast?lat=${city[2]}&lon=${city[3]}&${urlParams}` :
          `http://api.openweathermap.org/data/2.5/weather?lat=${city[2]}&lon=${city[3]}&${urlParams}`;

        fetch(url)
          .then(res => {
            if (res.ok) {
              return res.json()
            } else {
              throw new Error(res.status)
            }
          })
          .then(data => {
            this.setState({
              data: data,
              error: false
            });
          })
          .catch(err => {
            console.error(err);
            this.setState({
              error: true
            });
          });
      }
    }

    render() {
      const {data, error} = this.state;

      return (
        <Wrapped {...this.props} data={data} error={error}/>
      )
    }
  }
};

export default withData
