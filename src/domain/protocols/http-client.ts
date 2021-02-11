import { HttpResponse } from '.'

export interface HttpClient {
  get: (url: string) => Promise<HttpResponse>
}
