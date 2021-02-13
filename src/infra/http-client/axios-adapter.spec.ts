import axios from 'axios'
import { AxiosAdapter } from './axios-adapter'
import { HttpResponse } from '../../domain/protocols'
import { NoBaseUrlError } from '../../presentation/errors'

jest.mock('axios', () => ({
  defaults: { baseURL: 'https://any.url' },
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

  test('should return an error if no baseURL is provided', async () => {
    await expect(() => {
      axios.defaults.baseURL = undefined
      const sut = new AxiosAdapter()
      axios.defaults.baseURL = 'https://any.url'
      return sut
    }).toThrowError(new NoBaseUrlError())
  })
})
