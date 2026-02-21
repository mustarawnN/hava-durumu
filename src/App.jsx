import { useState } from "react"
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSearch(city) {
    setLoading(true)
    setError(null)

    try {
      const apiKey = import.meta.env.VITE_API_KEY
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`
      const response = await fetch(url)
      const data = await response.json()

      if (data.cod !== 200) {
        setError("Şehir bulunamadı!")
        setWeather(null)
      } else {
        setWeather(data)
      }
    } catch (err) {
      setError("Bir hata oluştu!")
    }

    setLoading(false)
  }

  return (
    <div className="app">
      <h1>Hava Durumu</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Yükleniyor...</p>}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  )
}

export default App