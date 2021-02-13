import { Form, Model } from '../../domain/models'

export interface Service<M extends Model, F extends Form = Partial<M>> {
  readonly resource: string
  find: (id: number | string) => Promise<M>
  params: (param: number | string) => Service<M, F>
  search: (search: number | string) => Service<M, F>
  page: (page: number) => Service<M, F>
  limit: (limit: number) => Service<M, F>
  query: (field: string, value: number | string) => Service<M, F>
}
