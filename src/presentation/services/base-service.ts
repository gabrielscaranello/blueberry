import { MissingResourceError } from '../errors'
import { Service, ServiceConfig } from '../protocols'
import { Form as BaseForm, Model as BaseModel } from '../../domain/models'
import { HttpClient } from '../../domain/protocols'
import { AxiosAdapter } from '../../infra/http-client/axios-adapter'
import { DEFAULT_SERVICE_CONFIG } from '../utils/default-service-config'

export abstract class BaseService<
  M extends BaseModel,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  F extends BaseForm = Partial<M>
> implements Service<M> {
  private readonly client: HttpClient

  get resource (): string {
    return ''
  }

  constructor (config?: ServiceConfig) {
    if (!this.resource) throw new MissingResourceError()
    const { baseUrl, client } = { ...DEFAULT_SERVICE_CONFIG, ...config }
    this.client = client ?? new AxiosAdapter(baseUrl)
  }

  async find (id: string | number): Promise<M> {
    const { data } = await this.client.get(`${this.resource}/${id}`)
    return data
  }
}
