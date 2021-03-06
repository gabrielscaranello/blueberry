import { InvalidQueryError } from '../errors'
import { URLBuilder } from './url-builder'

describe('URL Builder', () => {
  test('should returns initial uri if no param is provided', () => {
    const sut = new URLBuilder('users')
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

  test('should returns uri with queries if many queries is provided', () => {
    const sut = new URLBuilder('users', {
      query: [{ name: 'any name' }, { age: 18 }]
    })
    expect(sut.handler()).toBe('users?name=any%20name&age=18')
  })

  test('should returns correct uri in handle if no query is provided', () => {
    const sut = new URLBuilder('users')
    expect(sut.handler({})).toBe('users')
  })

  test('should returns correct uri in handle if query is provided', () => {
    const sut = new URLBuilder('users')
    const query = { limit: 20, page: 1, search: 'any search' }
    expect(sut.handler(query)).toBe('users?page=1&limit=20&search=any%20search')
  })

  test('should returns error if invalid queries is provided', () => {
    const sut = new URLBuilder('users', {
      query: [{ 'invalid query': 'any name' }]
    })
    expect(() => sut.handler()).toThrowError(new InvalidQueryError())
  })
})
