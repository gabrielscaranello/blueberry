import { HttpClient } from '../../domain/protocols'

export interface ServiceConfig {
  client?: HttpClient
  baseUrl?: string
}
