import instance from "@/api/index"

const getViralInsectData = (params) => {
  return instance.post('/virus-insect-transmission-relationships/list', params)
}
const predictGene = (params) => {
  return instance.post('/predict/gene', params)
}
const predictProtein = (params) => {
  return instance.post('/predict/protein', params)
}
const getViralPlantData = (params) => {
  return instance.post('/virus-plant-infection-relationships/list', params)
}
const getViralPlantInsectData = (params) => {
  return instance.post('/virus-plant-insect-relationships/list', params)
}
export {
  getViralInsectData,
  predictGene,
  getViralPlantData,
  getViralPlantInsectData,
  predictProtein
}
