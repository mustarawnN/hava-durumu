function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p className="temp">{Math.round(weather.main.temp)}°C</p>
      <p className="description">{weather.weather[0].description}</p>
      <div className="details">
        <div>
          <span>Hissedilen</span>
          <span>{Math.round(weather.main.feels_like)}°C</span>
        </div>
        <div>
          <span>Nem</span>
          <span>{weather.main.humidity}%</span>
        </div>
        <div>
          <span>Rüzgar</span>
          <span>{weather.wind.speed} m/s</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard