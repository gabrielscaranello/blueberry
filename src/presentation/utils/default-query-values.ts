import { Query } from '../protocols'

export function getDefaultQueryValues (): Query {
  return {
    query: [],
    limit: undefined,
    page: undefined,
    params: [],
    search: undefined
  }
}
