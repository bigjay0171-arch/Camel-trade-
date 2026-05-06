# 😂 Joke Generator

A fun and interactive random joke generator built with **React/Next.js**. Fetch jokes from multiple APIs, save your favorites, and share them with friends!

## ✨ Features

- 🎲 **Random Jokes** - Get jokes from multiple sources
- 📚 **Multiple APIs** - JokeAPI, Dad Jokes API, Official Joke API
- 🎯 **Categories** - Programming, Knock-Knock, General jokes
- ❤️ **Favorites** - Save your favorite jokes locally
- 🔗 **Share** - Share jokes on Twitter, Facebook, WhatsApp
- 📋 **Copy** - Copy jokes to clipboard with one click
- 📱 **Responsive** - Works perfectly on all devices
- ⚡ **Fast** - Built with Next.js for optimal performance

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the folder**
   ```bash
   cd joke-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
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
joke-generator/
├── src/
│   ├── components/
│   │   ├── JokeCard.jsx         # Display joke with actions
│   │   ├── CategoryFilter.jsx   # Filter by category/source
│   │   ├── FavoritesList.jsx    # View saved jokes
│   │   └── ShareButtons.jsx     # Social sharing options
│   ├── pages/
│   │   ├── index.jsx            # Main page
│   │   └── _app.jsx             # App wrapper
│   ├── hooks/
│   │   └── useFavorites.js      # Favorites management
│   ├── styles/
│   │   ├── globals.css          # Global styles
│   │   ├── Jokes.module.css     # Page styles
│   │   └── components.module.css # Component styles
│   └── utils/
│       └── jokeAPI.js           # API integration
├── package.json
├── next.config.js
└── README.md
```

## 🛠️ API Integration

### Supported APIs

1. **JokeAPI** (https://v2.jokeapi.dev/)
   - Categories: Programming, Knock-Knock, General
   - Reliable and well-maintained

2. **Dad Jokes API** (https://icanhazdadjoke.com/)
   - Pure dad jokes
   - Simple and fast

3. **Official Joke API** (https://official-joke-api.appspot.com/)
   - Clean two-part jokes
   - Setup and punchline format

### API Calls

```javascript
// Get random joke
const joke = await getRandomJoke();

// Get joke by category
const joke = await getJokeByCategory('programming');

// Get dad joke
const joke = await getDadJoke();
```

## 🎨 UI Components

### JokeCard Component
- Display joke with emoji source indicator
- Favorite button with animation
- Copy to clipboard functionality
- Share button

### CategoryFilter Component
- Select joke category
- Select joke source/API
- Real-time filtering

### FavoritesList Component
- Modal display of saved jokes
- Remove individual favorites
- Clear all button
- Empty state message

### ShareButtons Component
- Twitter share
- Facebook share
- WhatsApp share
- Copy to clipboard

## 💾 Local Storage

Favorite jokes are saved in browser's localStorage:
- Persists across sessions
- Uses `useFavorites` custom hook
- Automatic cleanup on app unload

## 🎯 Categories

- 🎯 **Any** - All categories
- 💻 **Programming** - Tech and coding jokes
- 🚪 **Knock-Knock** - Classic knock-knock jokes
- 😂 **General** - General humor

## 🔗 Sources

- 🎲 **Random Source** - Mix from all APIs
- 📚 **Joke API** - JokeAPI jokes
- 👨 **Dad Jokes** - Dad jokes only
- 🏆 **Official Jokes** - Official joke API

## 🔧 Technologies Used

- **React 18** - UI library
- **Next.js 14** - React framework
- **Axios** - HTTP client
- **CSS Modules** - Scoped styling
- **localStorage API** - Client-side storage
- **Web Share API** - Social sharing

## 🎯 Features Breakdown

### Next Joke
- Fetches new joke based on selected filters
- Shows loading state
- Clears share panel
- Smooth animations

### Favorites System
- Add/remove jokes with ❤️ button
- View all saved jokes in modal
- Persist across browser sessions
- Clear all button

### Sharing
- Twitter - Share with custom text
- Facebook - Share with page URL
- WhatsApp - Send via WhatsApp
- Copy - Copy joke text to clipboard

## 📱 Responsive Design

- **Desktop** - Full width layout
- **Tablet** - Optimized spacing
- **Mobile** - Stacked layout with full-width buttons

## 🚀 Performance

- ⚡ **API Timeout** - 5 second timeout per request
- 📦 **Lazy Loading** - Components loaded on demand
- 🎨 **CSS Optimization** - CSS Modules for efficient styling
- 🔄 **Error Handling** - Graceful fallback for failed requests

## 🐛 Troubleshooting

### API Errors
- Check internet connection
- Verify API endpoints are accessible
- Wait for API timeouts (5 seconds)

### Favorites Not Saving
- Check if localStorage is enabled
- Clear browser cache and try again
- Check browser privacy settings

### Sharing Not Working
- Ensure browser supports Web Share API
- Check social media share URLs
- Verify window location is available

## 📊 API Rate Limits

- **JokeAPI** - ~100 calls/minute
- **Dad Jokes** - No limit (free tier)
- **Official Joke API** - No strict limit

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Hooks](https://react.dev/reference/react)
- [Axios Documentation](https://axios-http.com/)

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

**Ready to laugh? Start generating jokes now!** 😂
