import { MissingResourceError } from '../errors'
import { Service } from '../protocols'

export abstract class BaseService implements Service {
  get resource (): string {
    return ''
  }

  constructor () {
    if (!this.resource) throw new MissingResourceError()
  }
}
