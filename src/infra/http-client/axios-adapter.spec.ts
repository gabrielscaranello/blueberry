import { AxiosAdapter } from './axios-adapter'
import { HttpResponse } from '../../domain/protocols/http-response'

jest.mock('axios', () => ({
  async get (): Promise<HttpResponse> {
    return await Promise.resolve({ status: 200, data: {} })
  }
}))

describe('AxiosAdapter', () => {
  test('should return valid response on call get method', async () => {
    const sut = new AxiosAdapter()
    const response = await sut.get('any_url')
    expect(response.status).toBe(200)
    expect(response.data).toEqual({})
  })
})
