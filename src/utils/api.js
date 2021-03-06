export const fetchLocationId = async (city) => {
  const response = await fetch(
    `http://192.168.31.133:3000/location?city=${city}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  const locations = await response.json()
  return locations[0]?.woeid
}

export const fetchWeather = async (woeid) => {
  const response = await fetch(
    `http://192.168.31.133:3000/weather?woeid=${woeid}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  const { title, consolidated_weather } = await response.json()
  const { weather_state_name, the_temp } = consolidated_weather[0]

  return {
    location: title,
    weather: weather_state_name,
    temperature: the_temp,
  }
}
