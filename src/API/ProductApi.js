import axiosClient from './Axios'

const productApi = {
  getAll(params) {
    const url = '/api/product/get-all'
    return axiosClient.get(url, { params })
  },
  get(id) {
    const url = `/api/product/create/${id}`
    return axiosClient.get(url)
  },
  add(data) {
    const url = '/api/product/create'
    return axiosClient.post(url, data)
  },
  update(data) {
    const url = `/api/product/update/${data.id}`
    return axiosClient.patch(url, data)
  },
  remove(id) {
    const url = `/api/product/delete/${id}`
    return axiosClient.delete(url)
  },
}
export default productApi
