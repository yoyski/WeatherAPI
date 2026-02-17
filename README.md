# WXCAST — Atmospheric Intelligence

A minimal weather app powered by the OpenWeatherMap API. Enter any city name and get real-time temperature, conditions, and a weather icon — instantly.

---

## Features

- Live weather data via the OpenWeatherMap API
- Displays current temperature (°C), weather conditions, and an icon
- Clean city-name lookup with automatic capitalisation
- No build tools or dependencies — pure HTML, CSS, and JavaScript

## Getting Started

Clone or download the repo, then open `index.html` directly in your browser. No install step required.

```bash
git clone https://github.com/your-username/wxcast.git
cd wxcast
open index.html
```

## Usage

1. Type a city name into the input field (e.g. `London`, `Tokyo`, `New York`)
2. Click **GET WEATHER** or press the button
3. Current temperature, conditions, and a weather icon will appear on the card

## Project Structure

```
wxcast/
├── index.html   # Markup and layout
├── style.css    # All styling and animations
├── script.js    # API calls and DOM updates
└── README.md
```

## API

This project uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/current). The endpoint used is:

```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}&units=metric
```

To use your own API key, replace the `appid` value in `script.js` with a key from [openweathermap.org](https://openweathermap.org/api).

## Tech Stack

- HTML5
- CSS3 (custom properties, keyframe animations, grid)
- Vanilla JavaScript (Fetch API, async/await)
- [OpenWeatherMap API](https://openweathermap.org/)
- [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) + [DM Mono](https://fonts.google.com/specimen/DM+Mono) via Google Fonts

## License

MIT
