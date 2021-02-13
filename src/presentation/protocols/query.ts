export interface Query {
  query?: Array<Record<string, string | number>>
  params?: Array<string | number>
  search?: string | number
  page?: number
  limit?: number
}
