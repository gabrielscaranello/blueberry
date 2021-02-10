import { MissingResourceError } from '../errors/missign-resource-error'
import { Service } from '../protocols/service'

export abstract class BaseService implements Service {
  get resource (): string {
    return ''
  }

  constructor () {
    if (!this.resource) throw new MissingResourceError()
  }
}
