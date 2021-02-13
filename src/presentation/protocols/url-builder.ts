export interface Query {
  query?: Array<Record<string, string | number>>
  params?: Array<string | number>
  search?: string | number
  page?: number
  limit?: number
}

export interface URLBuilder {
  uri: string
  query?: Query

  handler: () => string
  _includeParam: () => URLBuilder
  _getAditionals: () => Record<string, number | string | unknown>
  _getQuery: () => Record<string, number | string | unknown>
  _makeQuery: () => string
}
