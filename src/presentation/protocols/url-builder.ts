import { Query } from './query'

export interface URLBuilder {
  uri: string
  query?: Query

  handler: (query?: Query) => string
  _includeParam: () => URLBuilder
  _getAditionals: () => Record<string, number | string | unknown>
  _getQuery: () => Record<string, number | string | unknown>
  _makeQuery: () => string
}
