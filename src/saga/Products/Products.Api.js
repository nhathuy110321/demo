import AxiosRequest from '../../API/Axios'

const Home_API = {
  fetch: async (params) => {
    return await AxiosRequest.get(`product/get-all`, { params })
  },
  // get: async (id) => {
  //   return await AxiosRequest.get(`products/${id}`)
  // },
  post: async (data) => {
    delete data['id']
    return await AxiosRequest.post(`product/create`, { ...data })
  },
  patch: async (payload) => {
    const { id, ...data } = payload
    return await AxiosRequest.put(`product/update/${id}`, { ...data })
  },
  delete: async (id) => {
    return await AxiosRequest.delete(`product/delete/${id}`)
  },
}

export default Home_API
