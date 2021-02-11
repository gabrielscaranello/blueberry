import { Model } from '../../domain/models'

export interface Service<M extends Model> {
  readonly resource: string
  find: (id: number | string) => Promise<M>
}
