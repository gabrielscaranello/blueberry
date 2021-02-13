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

export function paginationParser<T extends Model> (
  payload: any
): PaginatedResult<T> {
  const data = payload[PAGINATION_CONFIG.data]
  const lastPage = parseInt(payload[PAGINATION_CONFIG.lastPage])
  const limit = parseInt(payload[PAGINATION_CONFIG.limit])
  const page = parseInt(payload[PAGINATION_CONFIG.page])
  const total = parseInt(payload[PAGINATION_CONFIG.total])
  return { lastPage, limit, page, total, data }
}
