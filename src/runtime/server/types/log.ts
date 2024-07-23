export interface Log {
  'headers': Record<string, string | undefined>
  'url': {
    path: string
    protocol: string
    query: string
  }
  'method': string
  'client_ip': string
  'request-timestamp': string
}

export interface LoggerOptions {
  enabled: boolean
  postLogEnabled: boolean
  baseUrl: string
  prefix: string
  zone: string
  apiKey: string
  pipeline: string
}
