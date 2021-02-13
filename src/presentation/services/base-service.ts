import { MissingResourceError } from '../errors'
import { Service } from '../protocols'
import { Form as BaseForm, Model as BaseModel } from '../../domain/models'
import { HttpClient } from '../../domain/protocols'
import { AxiosAdapter } from '../../infra/http-client/axios-adapter'
import { URLBuilder } from '../protocols/url-builder'
import { URLBuilder as URLBuilderImpl } from './url-builder'

export abstract class BaseService<
  M extends BaseModel,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  F extends BaseForm = Partial<M>
> implements Service<M> {
  private readonly client: HttpClient
  private readonly urlBuilder: URLBuilder

  get resource (): string {
    return ''
  }

  constructor () {
    if (!this.resource) throw new MissingResourceError()
    this.client = new AxiosAdapter()
    this.urlBuilder = new URLBuilderImpl(this.resource)
  }

  async find (id: string | number): Promise<M> {
    const { data } = await this.client.get(`${this.uri}/${id}`)
    return data
  }

  private get uri (): string {
    return this.urlBuilder.handler()
  }
}
