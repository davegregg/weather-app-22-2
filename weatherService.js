const baseURL = "https://api.weather.gov"
const headers = new Headers({
    "User-Agent": "Today's Hourly Weather (educational demo), dmg@kenzie.academy",
    "Accept": "application/ld+json",
})

// GET https://api.weather.gov/points/39.7456,-97.0892
// User-Agent: Today's Hourly Weather (educational demo), dmg@kenzie.academy
// Accept: application/ld+json

// coords -> function -> URL
function getGridPointURL (coords) {
    const url = `${baseURL}/points/${coords.latitude},${coords.longitude}`

    return fetch(url, { headers })
        .then(response => response.json())
        .then(payload => payload.forecastHourly)
}

// URL -> function -> six hourly forecasts
async function getHourlyForecastsByURL (url) {
    const response = await fetch(url, { headers })
    const payload = await response.json()

    return payload.periods.slice(0, 6)
}

// coords -> function -> six hourly forecasts
async function getHourlyForecastsByCoordinates (coords) {
    const url = await getGridPointURL(coords)
    const forecasts = await getHourlyForecastsByURL(url)

    return forecasts
}

const getHourlyForecasts = getHourlyForecastsByCoordinates

export { getHourlyForecasts }
