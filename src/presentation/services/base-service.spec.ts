import { MissingResourceError } from '../errors'
import { Service } from '../protocols'
import { Model } from '../protocols/model'
import { BaseService } from './base-service'

interface User extends Model {
  name: string
}

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

  test('should BaseService returns Model with related id in find method', () => {
    const sut = makeSut()
    const result = sut.find(1)
    expect(result).toBeTruthy()
    expect(result.id).toBe(1)
  })
})
