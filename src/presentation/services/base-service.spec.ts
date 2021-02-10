import { MissingResourceError } from '../errors'
import { Service } from '../protocols'
import { Model } from '../protocols/model'
import { BaseService } from './base-service'

const makeSutWithNoResource = (): Service => {
  interface User extends Model {
    name: string
  }
  class UserService extends BaseService<User> {}
  return new UserService()
}

describe('Base Service Class', () => {
  test('should instance of base service returns erro if no resource is provided', () => {
    expect(() => makeSutWithNoResource()).toThrowError(
      new MissingResourceError()
    )
  })
})
