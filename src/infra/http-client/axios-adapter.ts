import axios from 'axios'
import { HttpClient, HttpResponse } from '../../domain/protocols'

export class AxiosAdapter implements HttpClient {
  constructor (baseUrl?: string) {
    if (!axios.defaults.baseURL) {
      if (!baseUrl) throw new Error('Please provided an base URL')
      axios.defaults.baseURL = baseUrl
    }
  }

  async get (url: string): Promise<HttpResponse> {
    const response = await axios.get(url)
    const { status, data } = response
    return { data, status }
  }
}
