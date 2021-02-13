import { Model } from '../../domain/models'

export interface Service<M extends Model> {
  readonly resource: string
  find: (id: number | string) => Promise<M>
  params: (param: number | string) => Service<M>
  search: (search: number | string) => Service<M>
  page: (page: number) => Service<M>
  limit: (limit: number) => Service<M>
  query: (field: string, value: number | string) => Service<M>
}
