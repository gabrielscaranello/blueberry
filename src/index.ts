import { readFileSync } from 'fs'
import { join } from 'path'
import { Config } from './domain/protocols/config'

export async function getConfig (): Promise<Config> {
  const configFile = '../../.gs-blueberry.config.json'
  const filePath = join(__dirname, configFile)
  const strConfig = await readFileSync(filePath, { encoding: 'utf-8' })
  const config = JSON.parse(strConfig)
  return config
}

export * from './presentation/services/base-service'
export * from './presentation/protocols'
export * from './domain/models'
export * from './domain/protocols'
