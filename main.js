/*
    1. Get latitude/longitude coordinates in some way.
        a. If the user rejects the request for location permission, guess the latitude/longitude coordinates based on IP address. (https://hutils.loxal.net/whois)
        b. Ask user for location permission, and grab the latitude/longitude coordinates.
        c. (Optionally) Get location from form input and get latitude/longitude based on that input, using some other third-party API.
    2. Get hourly forecast data based on lat/long coords.
        a. Once we have lat/long coords, send a request to the NWS API /points end to get the final forecast API link (/gridpoints).
        b. Fetch hourly forecast from /gridpoints.
    3. Display the results on the page.
*/

import { getHourlyForecasts } from "./weatherService.js"
import { renderHourlyForecasts } from "./view.js"

const locationPermission = await navigator.permissions.query({ name: 'geolocation' })

if (locationPermission.state === "granted") {
    navigator
        .geolocation
        .getCurrentPosition(onSuccess, onError)
} else {
    // Guess using IP address
}


function onSuccess (position) {
    console.log("APPROVED:", position)
    
    getHourlyForecasts(position.coords)
        .then(renderHourlyForecasts)
}

function onError (error) {
    console.warn("ACCURATE LOCATION REJECTED")
}