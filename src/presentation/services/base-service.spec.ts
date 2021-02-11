import { MissingResourceError } from '../errors'
import { Service } from '../protocols'
import { Model } from '../../domain/models'
import { BaseService } from './base-service'
import { HttpResponse } from '../../domain/protocols'

interface User extends Model {
  name: string
}

jest.mock('axios', () => ({
  defaults: { baseURL: 'https://any.url' },
  async get (): Promise<HttpResponse> {
    return await Promise.resolve({ status: 200, data: { id: 1 } })
  }
}))

const makeSut = (): Service<User> => {
  class UserService extends BaseService<User> {
    get resource (): string {
      return 'users'
    }
  }

  return new UserService()
}

const makeSutWithNoResource = (): Service<User> => {
  class UserService extends BaseService<User> {}
  return new UserService()
}

describe('Base Service Class', () => {
  test('should instance of base service returns erro if no resource is provided', () => {
    expect(() => makeSutWithNoResource()).toThrowError(
      new MissingResourceError()
    )
  })

  test('should BaseService returns Model with related id in find method', async () => {
    const sut = makeSut()
    const result = await sut.find(1)
    expect(result).toBeTruthy()
    expect(result.id).toBe(1)
  })
})
