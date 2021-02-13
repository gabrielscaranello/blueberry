// import { Query } from '../protocols/url-builder'
import { URLBuilder } from './url-builder'

// const DEAFULT_QUERY: Query = {
//   query: [{ any_param: 'any_value' }],
//   page: 1,
//   limit: 10,
//   params: ['any_param'],
//   search: 'any_search'
// }

describe('URL Builder', () => {
  test('should returns initial uri if no param is provided', () => {
    const sut = new URLBuilder('users', {})
    expect(sut.handler()).toBe('users')
  })
})
