import axios from "axios"

async function getLocation(req, res) {
  const { city } = req.query
  const response = await axios.get(
    `https://www.metaweather.com/api/location/search/?query=${city}`
  )
  res.status(200).json(response.data)
}

async function getWeather(req, res) {
  const { woeid } = req.query
  const response = await axios.get(
    `https://www.metaweather.com/api/location/${woeid}`
  )

  res.status(200).json(response.data)
}

export { getLocation, getWeather }
