function renderHourlyForecasts (forecasts) {
    // render to DOM
    console.log(forecasts)
    document.body.append(JSON.stringify(forecasts))
}

export { renderHourlyForecasts }