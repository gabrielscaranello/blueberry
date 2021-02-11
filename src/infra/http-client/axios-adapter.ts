import axios from 'axios'
import { HttpClient, HttpResponse } from '../../domain/protocols'

export class AxiosAdapter implements HttpClient {
  async get (url: string): Promise<HttpResponse> {
    const response = await axios.get(url)
    const { status, data } = response
    return { data, status }
  }
}
