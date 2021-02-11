import { HttpResponse } from './http-response'

export interface HttpClient {
  get: (url: string) => Promise<HttpResponse>
}
