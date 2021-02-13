import axios from 'axios'
import { HttpClient, HttpResponse } from '../../domain/protocols'
import { NoBaseUrlError } from '../../presentation/errors'

export class AxiosAdapter implements HttpClient {
  constructor () {
    if (!axios.defaults.baseURL) throw new NoBaseUrlError()
  }

  async get (url: string): Promise<HttpResponse> {
    const response = await axios.get(url)
    const { status, data } = response
    return { data, status }
  }
}
