import { getConfig } from '../..'
import { Model } from '../../domain/models'
import { PaginatedResult } from '../protocols'

export interface PaginationConfig {
  data: string
  page: string
  total: string
  limit: string
  lastPage: string
}

const PAGINATION_CONFIGS = {
  LARAVEL: {
    data: 'data',
    page: 'current_page',
    total: 'total',
    limit: 'per_page',
    lastPage: 'last_page'
  },
  ADONIS: {
    data: 'rows',
    page: 'currentPage',
    total: 'totalNumber',
    limit: 'perPage',
    lastPage: 'lastPage'
  }
}

export async function paginationParser<T extends Model> (
  payload: any
): Promise<PaginatedResult<T>> {
  const pagination = await getPaginationConfig()
  const data = payload[pagination.data]
  const lastPage = parseInt(payload[pagination.lastPage])
  const limit = parseInt(payload[pagination.limit])
  const page = parseInt(payload[pagination.page])
  const total = parseInt(payload[pagination.total])
  return { lastPage, limit, page, total, data }
}

async function getPaginationConfig (): Promise<PaginationConfig> {
  try {
    const config = (await getConfig()).pagination || 'LARAVEL'
    if (typeof config !== 'string') return config
    return PAGINATION_CONFIGS[config]
  } catch (error) {
    console.log(error)
    return PAGINATION_CONFIGS.LARAVEL
  }
}
