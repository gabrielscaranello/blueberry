import axios from 'axios'
import { HttpClient } from '../../domain/protocols/http-client'
import { HttpResponse } from '../../domain/protocols/http-response'

export class AxiosAdapter implements HttpClient {
  async get (url: string): Promise<HttpResponse> {
    const response = await axios.get(url)
    const { status, data } = response
    return { data, status }
  }
}
