let mainElement = document.querySelector('main')

function renderHourlyForecasts(forecasts) {
    // render to DOM
    console.log(forecasts)

    forecasts.forEach(renderForecast)

}

function renderForecast(forecastObj) {
    let forecastCard = document.createElement("section")
    forecastCard.classList.add("card")

    let iconElement = document.createElement("img")
    iconElement.src = forecastObj.icon

    let temperatureElement = document.createElement("p")
    temperatureElement.innerText = `${forecastObj.temperature}° ${forecastObj.temperatureUnit}`

    let conditionsElement = document.createElement("p")
    conditionsElement.innerText = forecastObj.shortForecast

    forecastCard.append(iconElement, temperatureElement, conditionsElement)
    mainElement.append(forecastCard)
}

export { renderHourlyForecasts }