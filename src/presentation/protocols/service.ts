import { Form, Model } from '../../domain/models'
import { PaginatedResult } from './paginated-result'

export interface Service<M extends Model, F extends Form = Partial<M>> {
  readonly resource: string
  find: (id: number | string) => Promise<M>
  all: () => Promise<M[]>
  paginate: (page: number, limit: number) => Promise<PaginatedResult<M>>
  params: (param: number | string) => Service<M, F>
  search: (search: number | string) => Service<M, F>
  query: (field: string, value: number | string) => Service<M, F>
}
