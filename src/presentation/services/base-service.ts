import { MissingResourceError } from '../errors'
import { Service } from '../protocols'
import { Form as BaseForm, Model as BaseModel } from '../../domain/models'
import { HttpClient } from '../../domain/protocols'
import { AxiosAdapter } from '../../infra/http-client/axios-adapter'
import { Query, URLBuilder } from '../protocols/url-builder'
import { URLBuilder as URLBuilderImpl } from './url-builder'
import { getDefaultQueryValues } from '../utils/default-query-values'

export abstract class BaseService<
  M extends BaseModel,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  F extends BaseForm = Partial<M>
> implements Service<M> {
  private readonly client: HttpClient
  private readonly urlBuilder: URLBuilder
  private readonly _query: Query

  get resource (): string {
    return ''
  }

  constructor () {
    if (!this.resource) throw new MissingResourceError()
    this.client = new AxiosAdapter()
    this.urlBuilder = new URLBuilderImpl(this.resource)
    this._query = getDefaultQueryValues()
  }

  async find (id: string | number): Promise<M> {
    this.params(id)
    const { data } = await this.client.get(this.uri)
    return data
  }

  private get uri (): string {
    return this.urlBuilder.handler(this._query)
  }

  params (param: number | string): Service<M> {
    this._query.params?.push(param)
    return this
  }

  search (search: number | string): Service<M> {
    this._query.search = search
    return this
  }

  page (page: number): Service<M> {
    this._query.page = page
    return this
  }

  limit (limit: number): Service<M> {
    this._query.limit = limit
    return this
  }

  query (field: string, value: number | string): Service<M> {
    if (!this._query.query || !this._query.query.length) {
      this._query.query = []
    }

    this._query.query.push({ [field]: value })
    return this
  }
}
