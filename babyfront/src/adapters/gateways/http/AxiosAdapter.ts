import axios from 'axios'
import HttpClient from '../../../usecases/ports/http/HttpCliente'

export default class AxiosAdapter implements HttpClient {
  async get(url: string): Promise<any> {
    const response = await axios.get(url)
    if (response.status != 200) throw new Error('Error attempt to get backend data!')
    return response.data
  }
  async post(url: string, body: any, header?: any): Promise<any> {
    const response = await axios.post(url, body, header)
    if (response.status != 200) throw new Error('Error attempt to post backend data!')
    return response.data
  }
  async put(url: string, body: any, header?: any): Promise<any> {
    const response = await axios.put(url, body, header)
    if (response.status != 200) throw new Error('Error attempt to put backend data!')
    return response.data
  }
  async delete(url: string): Promise<any> {
    const response = await axios.delete(url)
    if (response.status != 200) throw new Error('Error attempt to delete backend data!')
    return response.data
  }
}
