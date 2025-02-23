import instance from "@/api/index"

const getViralInsectData = (params) => {
  return instance.post('/virus-insect-transmission-relationships/list', params)
}

export {
  getViralInsectData
}
