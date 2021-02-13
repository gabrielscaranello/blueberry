import { Model } from '../../domain/models'

export interface PaginatedResult<M extends Model> {
  data: M[]
  page: number
  limit: number
  total: number
  lastPage: number
}
