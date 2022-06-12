import axiosInstance from 'axios'

export const API_KEY = '150e8111-eac0-400a-894d-e73cc9b0bdc6'

export default axiosInstance.create({
  baseURL: 'http://api.airvisual.com/v2/',
})
