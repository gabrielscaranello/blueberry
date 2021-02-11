import { MissingResourceError } from '../errors'
import { Service } from '../protocols'
import { Form as BaseForm, Model as BaseModel } from '../protocols/model'

export abstract class BaseService<
  M extends BaseModel,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  F extends BaseForm = Partial<M>
> implements Service<M> {
  get resource (): string {
    return ''
  }

  constructor () {
    if (!this.resource) throw new MissingResourceError()
  }

  find (id: string | number): M {
    return ({ id } as unknown) as M
  }
}
