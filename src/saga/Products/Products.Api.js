import AxiosRequest from '../../API/Axios'

const Home_API = {
  fetch: async (params) => {
    return await AxiosRequest.get(`products`, { params })
  },
}

export default Home_API
