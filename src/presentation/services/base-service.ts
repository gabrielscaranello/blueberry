import { MissingResourceError } from '../errors/missign-resource-error'

export abstract class BaseService {
  get resourse (): string {
    return ''
  }

  constructor () {
    if (!this.resourse) throw new MissingResourceError()
  }
}
