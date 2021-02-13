import { Model } from '../../domain/models'
import { PaginatedResult } from '../protocols'

const LARAVEL_PAGINATION_CONFIG = {
  data: 'data',
  page: 'current_page',
  total: 'total',
  limit: 'per_page',
  lastPage: 'last_page'
}

// Default is for laravel
const PAGINATION_CONFIG = LARAVEL_PAGINATION_CONFIG

export function paginationParse<T extends Model> (pl: any): PaginatedResult<T> {
  const data = pl[PAGINATION_CONFIG.data]
  const lastPage = pl[PAGINATION_CONFIG.lastPage]
  const limit = pl[PAGINATION_CONFIG.limit]
  const page = pl[PAGINATION_CONFIG.page]
  const total = pl[PAGINATION_CONFIG.total]
  return { data, lastPage, limit, page, total }
}
