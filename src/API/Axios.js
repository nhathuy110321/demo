import axios from 'axios'
import { SYSTEM_ERROR, LOCAL_STORAGE_KEY } from '../constants'

class AxiosClient {
  instance

  // eslint-disable-next-line no-undef
  token = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) ?? ''

  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_VERSION}`,
      headers: {
        Authorization: this.getToken(),
      },
      timeout: 10000,
      // eslint-disable-next-line no-undef
      timeoutErrorMessage: SYSTEM_ERROR.TIMEOUT_ERROR.MESSAGE,
    })

    this._initializeResponseInterceptor()
  }

  getToken() {
    return `Bearer ${this.token}`
  }

  setToken(token) {
    this.token = token
  }

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequestSuccess,
      this._handleRequestError
    )
    this.instance.interceptors.response.use(
      this._handleResponseSuccess,
      this._handleResponseError
    )
  }

  _handleRequestSuccess = (config) => {
    return config
  }

  _handleRequestError = (error) => {
    // eslint-disable-next-line
    console.error(`[request error] [${JSON.stringify(error)}]`)
    if (error.response) {
      return error?.response?.data
    }

    return Promise.reject(error)
  }

  _handleResponseSuccess = ({ data }) => data

  _handleResponseError = async (error) => {
    return await Promise.reject(error?.response?.data)
  }

  async request(config) {
    return await this.instance.request(config)
  }

  async get(url, config) {
    return await this.instance.get(url, config)
  }

  async delete(url, config) {
    return await this.instance.delete(url, config)
  }

  async post(url, data, config) {
    return await this.instance.post(url, data, config)
  }

  async put(url, data, config) {
    return await this.instance.put(url, data, config)
  }

  async patch(url, data, config) {
    return await this.instance.patch(url, data, config)
  }
}
const AxiosRequest = new AxiosClient()
export default AxiosRequest
