# 🌤️ Weather Dashboard

A real-time weather dashboard built with **React/Next.js** and powered by the **OpenWeatherMap API**. Get current weather, 5-day forecasts, and more with a beautiful, responsive interface.

## ✨ Features

- 🌍 **Search by City** - Look up weather for any city worldwide
- 📍 **Geolocation Support** - Get weather for your current location
- 🌡️ **Current Weather** - Temperature, humidity, pressure, wind speed
- 📅 **5-Day Forecast** - Daily weather predictions with icons
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- 🎨 **Beautiful UI** - Modern design with smooth animations
- ⚡ **Fast Performance** - Built with Next.js for optimal speed
- 🚀 **Auto-Deploy** - Deployed to GitHub Pages via GitHub Actions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Local Development

1. **Get OpenWeatherMap API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the account page
   - It's free and includes up to 1,000 calls/day

2. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local and add your API key
   NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
weather-dashboard/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx      # Search and geolocation
│   │   ├── WeatherCard.jsx    # Current weather display
│   │   └── ForecastCard.jsx   # 5-day forecast
│   ├── pages/
│   │   ├── index.jsx          # Main page
│   │   └── _app.jsx           # App wrapper
│   ├── styles/
│   │   ├── globals.css        # Global styles
│   │   ├── Home.module.css    # Page styles
│   │   └── components.module.css  # Component styles
│   └── utils/
│       └── weatherAPI.js      # API integration
├── .env.example               # Environment template
├── package.json               # Dependencies
├── next.config.js             # Next.js config
└── README.md                  # This file
```

## 🛠️ API Integration

The app uses **OpenWeatherMap Free API**:

### Current Weather
```javascript
GET /data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

### 5-Day Forecast
```javascript
GET /data/2.5/forecast?q={city}&appid={API_KEY}&units=metric
```

### By Coordinates
```javascript
GET /data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric
```

## 🎨 UI Components

### SearchBar Component
- City name input
- Geolocation button
- Loading states
- Error handling

### WeatherCard Component
- Current temperature
- Weather condition with icon
- "Feels like" temperature
- Humidity, pressure, wind speed
- Responsive grid layout

### ForecastCard Component
- 5-day daily forecasts
- Weather icons
- Temperature and conditions
- Humidity percentage
- Hover animations

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with grid forecasts
- **Tablet**: Optimized spacing and touch targets
- **Mobile**: Stacked layout, full-width cards

## 🔧 Technologies Used

- **React** - UI library
- **Next.js** - React framework with SSG
- **Axios** - HTTP client for API calls
- **date-fns** - Date formatting and manipulation
- **CSS Modules** - Scoped styling
- **GitHub Actions** - CI/CD automation

## 📊 API Limits (Free Tier)

- **Calls/Minute**: 60
- **Calls/Month**: 1,000,000
- **History**: 5 days
- **Forecast**: 5 days

## 🐛 Troubleshooting

### API Key Not Working
- Verify key is correct in `.env.local`
- Check API key is active in OpenWeatherMap account
- Wait 5-10 minutes after key creation

### Geolocation Not Working
- Browser must have location permission enabled
- Only works on HTTPS (deployed sites)
- Check browser console for permission errors

### Forecast Not Showing
- Ensure API key has forecast access
- Check network tab for API errors
- Verify city name is correct

## 📝 Environment Setup

```bash
# Create .env.local file
NEXT_PUBLIC_OPENWEATHER_API_KEY=sk_xxxxxxxxxxxx

# Note: NEXT_PUBLIC_ prefix makes it available in browser
```

## 🚀 Performance Optimizations

- ✅ Static generation with Next.js
- ✅ Image optimization
- ✅ CSS modules for scoped styling
- ✅ Debounced API calls
- ✅ Efficient component re-renders

## 📄 License

MIT License

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

**Made with ❤️ by Weather Dashboard Team**
