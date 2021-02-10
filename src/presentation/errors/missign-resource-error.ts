export class MissingResourceError extends Error {
  constructor () {
    super('Please, provide an resource')
    this.name = 'MissingResourceError'
  }
}
