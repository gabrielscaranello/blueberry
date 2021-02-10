import { MissingResourceError } from '../errors/missign-resource-error'
import { Service } from '../protocols/service'
import { BaseService } from './base-service'

const makeSutWithNoResource = (): Service => {
  class UserService extends BaseService {}
  return new UserService()
}

describe('Base Service Class', () => {
  test('should instance of base service returns erro if no resource is provided', () => {
    expect(() => makeSutWithNoResource()).toThrowError(
      new MissingResourceError()
    )
  })
})
