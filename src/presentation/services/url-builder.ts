import { InvalidQueryError } from '../errors/invalid-query-error'
import { Query, URLBuilder as URLBuilderI } from '../protocols/url-builder'

export class URLBuilder implements URLBuilderI {
  uri: string
  query?: Query

  constructor (uri: string, query?: Query) {
    this.uri = uri
    this.query = query
  }

  handler (): string {
    this._includeParam()
    const qs = this._makeQuery()
    if (!qs) return `${this.uri}`
    return `${this.uri}?${qs}`
  }

  _includeParam (): URLBuilder {
    if (!this.query) return this
    const { params } = this.query
    if (!params?.length) return this

    params.forEach(param => {
      this.uri += `/${param}`
    })

    return this
  }

  _getAditionals (): Record<string, number | string | unknown> {
    if (!this.query) return {}
    const { page, limit, search } = this.query
    return { page, limit, search }
  }

  _makeQuery (): string {
    const params = { ...this._getQuery(), ...this._getAditionals() }
    const queryString = Object.keys(params)
      .map(key => {
        if (key.includes(' ')) throw new InvalidQueryError()
        const isValid =
          Object.prototype.hasOwnProperty.call(params, key) && !!params[key]

        if (!isValid) return ''
        return `${key}=${encodeURIComponent(params[key] as string)}`
      })
      .filter(param => !!param)
      .join('&')

    return queryString
  }

  _getQuery (): Record<string, number | string | unknown> {
    let params = {}
    if (!this.query || !this.query.query) return params

    this.query.query.forEach(query => {
      const [key] = Object.keys(query)
      const [value] = Object.values(query)
      params = { ...params, [key]: value }
    })

    return params
  }
}
