import { MissingResourceError } from '../errors'
import { Service } from '../protocols'
import { Form as BaseForm, Model as BaseModel } from '../../domain/models'
import { HttpClient } from '../../domain/protocols'
import { AxiosAdapter } from '../../infra/http-client/axios-adapter'

export abstract class BaseService<
  M extends BaseModel,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  F extends BaseForm = Partial<M>
> implements Service<M> {
  private readonly client: HttpClient

  get resource (): string {
    return ''
  }

  constructor (client: HttpClient = new AxiosAdapter()) {
    if (!this.resource) throw new MissingResourceError()
    this.client = client
  }

  async find (id: string | number): Promise<M> {
    const { data } = await this.client.get(`any/${id}`)
    return data
  }
}
