import { useState, useEffect } from 'react'

function App() {
  const [city, setCity] = useState('Tel Aviv')
  const [searchInput, setSearchInput] = useState('')
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const API_KEY = 'demo' // Using demo mode for portfolio

  useEffect(() => {
    fetchWeather(city)
  }, [])

  const fetchWeather = async (cityName) => {
    setLoading(true)
    setError('')

    try {
      // Simulated weather data for demo purposes
      // In production, use: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`

      await new Promise(resolve => setTimeout(resolve, 500)) // Simulate API delay

      const demoWeather = {
        name: cityName,
        main: {
          temp: Math.floor(Math.random() * 15) + 20,
          feels_like: Math.floor(Math.random() * 15) + 19,
          humidity: Math.floor(Math.random() * 30) + 50,
          pressure: Math.floor(Math.random() * 20) + 1010
        },
        weather: [
          {
            main: ['Clear', 'Clouds', 'Rain'][Math.floor(Math.random() * 3)],
            description: 'scattered clouds',
            icon: '03d'
          }
        ],
        wind: {
          speed: Math.floor(Math.random() * 10) + 2
        }
      }

      const demoForecast = Array.from({ length: 5 }, (_, i) => ({
        dt: Date.now() + (i + 1) * 86400000,
        main: {
          temp: Math.floor(Math.random() * 15) + 18
        },
        weather: [
          {
            main: ['Clear', 'Clouds', 'Rain'][Math.floor(Math.random() * 3)],
            icon: '03d'
          }
        ]
      }))

      setWeather(demoWeather)
      setForecast(demoForecast)
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchInput.trim()) {
      setCity(searchInput.trim())
      fetchWeather(searchInput.trim())
      setSearchInput('')
    }
  }

  const getWeatherIcon = (iconCode) => {
    const icons = {
      Clear: '☀️',
      Clouds: '☁️',
      Rain: '🌧️',
      Snow: '❄️',
      Thunderstorm: '⛈️'
    }
    return icons[iconCode] || '🌤️'
  }

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', { weekday: 'short' })
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">🌤️ Weather Dashboard</h1>

        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search for a city..."
            className="search-input"
          />
          <button type="submit" className="search-btn">Search</button>
        </form>

        {error && <div className="error">{error}</div>}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : weather ? (
          <>
            <div className="current-weather">
              <div className="city-name">{weather.name}</div>
              <div className="weather-icon">{getWeatherIcon(weather.weather[0].main)}</div>
              <div className="temperature">{Math.round(weather.main.temp)}°C</div>
              <div className="description">{weather.weather[0].main}</div>

              <div className="weather-details">
                <div className="detail">
                  <span className="label">Feels Like</span>
                  <span className="value">{Math.round(weather.main.feels_like)}°C</span>
                </div>
                <div className="detail">
                  <span className="label">Humidity</span>
                  <span className="value">{weather.main.humidity}%</span>
                </div>
                <div className="detail">
                  <span className="label">Wind Speed</span>
                  <span className="value">{weather.wind.speed} m/s</span>
                </div>
                <div className="detail">
                  <span className="label">Pressure</span>
                  <span className="value">{weather.main.pressure} hPa</span>
                </div>
              </div>
            </div>

            <div className="forecast">
              <h2 className="forecast-title">5-Day Forecast</h2>
              <div className="forecast-grid">
                {forecast.map((day, index) => (
                  <div key={index} className="forecast-card">
                    <div className="forecast-day">{formatDate(day.dt)}</div>
                    <div className="forecast-icon">{getWeatherIcon(day.weather[0].main)}</div>
                    <div className="forecast-temp">{Math.round(day.main.temp)}°C</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default App
