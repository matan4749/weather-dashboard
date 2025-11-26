# 🌤️ Weather Dashboard

A beautiful and responsive weather dashboard built with React and Vite. Get real-time weather information and a 5-day forecast for any city worldwide.

![Weather Dashboard](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions for any city
- **5-Day Forecast**: View upcoming weather predictions
- **Beautiful UI**: Modern, gradient-based design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Weather Details**: Temperature, humidity, wind speed, pressure, and more
- **Search Functionality**: Easy city search with instant results
- **Weather Icons**: Visual representation of weather conditions

## 🚀 Demo

The app displays:
- Current temperature and "feels like" temperature
- Weather condition with emoji icons
- Humidity percentage
- Wind speed
- Atmospheric pressure
- 5-day weather forecast with daily temperatures

## 🛠️ Technologies Used

- **React 19.2** - UI library
- **Vite 7.2** - Build tool and dev server
- **CSS3** - Modern styling with gradients and animations
- **OpenWeatherMap API** - Weather data (configured for demo mode)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/matan4749/weather-dashboard.git
cd weather-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔧 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Usage

1. The app loads with default city (Tel Aviv)
2. Use the search bar to enter any city name
3. Click "Search" or press Enter
4. View current weather and 5-day forecast

## 📝 API Configuration

To use real weather data instead of demo mode:

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Replace the `API_KEY` in `src/App.jsx`
3. Uncomment the real API call in the `fetchWeather` function

## 🎨 Features Showcase

### Current Weather Display
- Large, easy-to-read temperature display
- Weather condition with emoji representation
- Detailed metrics in organized cards
- Smooth loading states

### 5-Day Forecast
- Daily temperature predictions
- Weather condition icons
- Hover effects for better UX
- Responsive grid layout

### Search Experience
- Clean, modern search interface
- Error handling with user-friendly messages
- Loading indicators during data fetch

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Matan Amar**
- GitHub: [@matan4749](https://github.com/matan4749)
- Portfolio: [matan.life](https://matan.life)

## 🙏 Acknowledgments

- Weather data provided by OpenWeatherMap
- Icons and design inspiration from modern weather apps
- Built as part of my portfolio to demonstrate React and API integration skills

---

⭐ If you like this project, please give it a star on GitHub!
