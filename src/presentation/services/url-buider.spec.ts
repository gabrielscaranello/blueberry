// import { Query } from '../protocols/url-builder'
import { URLBuilder } from './url-builder'

// const DEAFULT_QUERY: Query = {
//   query: [{ any_param: 'any value' }],
//   page: 1,
//   limit: 10,
//   params: ['any param'],
//   search: 'any search'
// }

describe('URL Builder', () => {
  test('should returns initial uri if no param is provided', () => {
    const sut = new URLBuilder('users', {})
    expect(sut.handler()).toBe('users')
  })

  test('should returns uri with param if param is provided', () => {
    const sut = new URLBuilder('users', { params: [1] })
    expect(sut.handler()).toBe('users/1')
  })

  test('should returns uri with page if page is provided', () => {
    const sut = new URLBuilder('users', { page: 1 })
    expect(sut.handler()).toBe('users?page=1')
  })

  test('should returns uri with limit if limit is provided', () => {
    const sut = new URLBuilder('users', { limit: 10 })
    expect(sut.handler()).toBe('users?limit=10')
  })

  test('should returns uri with search if search is provided', () => {
    const sut = new URLBuilder('users', { search: 'any search' })
    expect(sut.handler()).toBe('users?search=any%20search')
  })
})
