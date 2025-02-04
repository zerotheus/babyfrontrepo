export default interface HttpClient {
    get(url: string): Promise<any>
    post(url: string, body: any, header?: any): Promise<any>
    put(url: string, body: any, header?: any): Promise<any>
    delete(url: string): Promise<any>
  }
  