export class InvalidQueryError extends Error {
  constructor () {
    super('Please, provide an valid query')
    this.name = 'InvalidQueryError'
  }
}
