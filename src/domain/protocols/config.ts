import { PaginationConfig } from '../../presentation/utils/pagination-parser'

export interface Config {
  pagination: 'LARAVEL' | 'ADONIS' | PaginationConfig
}
