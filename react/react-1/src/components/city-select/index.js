import React, {Component} from 'react';

class CitySelect extends Component {
  state = {
    value: this.props.city
  };

  cities = this.props.data.map(item => {
    const {id, city} = item;

    return (
      <option
        key={id}
        value={city}
      >
        {city}
      </option>
    )
  });

  setValue(value) {
    this.setState({value});
    this.props.onSelectChange(value);
  }

  componentDidMount() {
    this.setValue(this.props.data[0].city);
  }

  onSelectChange = event => {
    this.setValue(event.target.value);
  };

  onClickFavorites = () => {
    this.props.onClickFavorites(this.state.value);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.city !== this.props.city) {
      this.setState({
        value: this.props.city
      })
    }
  }

  render() {
    return (
      <div className="input-group input-group-lg mb-2">
        <select
          className="form-control form-control-lg"
          onChange={this.onSelectChange}
          value={this.state.value}
        >
          {this.cities}
        </select>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            onClick={this.onClickFavorites}
          >
            <i className="fas fa-star fa-lg"> </i>
          </button>
        </div>
      </div>
    )
  }
}

export default CitySelect
