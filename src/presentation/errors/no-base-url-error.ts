export class NoBaseUrlError extends Error {
  constructor () {
    super('Please, provide an valid base URL')
    this.name = 'NoBaseUrlError'
  }
}
