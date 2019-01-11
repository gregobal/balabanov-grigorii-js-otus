import React from "react";

const CityWeather = ({data}) => {
  const {city, temp, overcast, wind, humidity} = data;

  return (
    <div className="card text-white bg-secondary mb-3">
      <div className="card-header text-center">
        <h3>
          <i className={`fas fa-${overcast} fa-3x`}> </i>
        </h3>
        <h2>
          {city}
        </h2>
      </div>
      <div className="card-body">
        <div className="row align-items-center text-center m-4">
          <div className="col">
            <h2>
              {temp} &#8451;
            </h2>
          </div>
          <div className="col">
            <h3>
              <i className="fas fa-wind fa-lg"> </i>
              <span> {wind} m / s</span>
            </h3>
          </div>
          <div className="col">
            <h3>
              <i className="fas fa-tint fa-lg"> </i>
              <span> {humidity} %</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CityWeather
