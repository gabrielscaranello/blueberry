import { Query } from '../protocols/url-builder'

export function getDefaultQueryValues (): Query {
  return {
    query: [],
    limit: undefined,
    page: undefined,
    params: [],
    search: undefined
  }
}
