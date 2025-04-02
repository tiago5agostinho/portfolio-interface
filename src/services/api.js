import axios from 'axios'

const apiPortfolio = axios.create({
  baseURL: 'http://localhost:3001'
})

apiPortfolio.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('portfolio:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.Autorization = `Bearer ${token}`
  return config
})

export default apiPortfolio
