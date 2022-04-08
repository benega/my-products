import axios, { AxiosResponse } from 'axios';
import { HttpRequest, HttpResponse, HttpClient } from '../../data/protocols/http-client';

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse

    if (data.authorized && localStorage.accessToken) {
      Object.assign(data, {
        headers: Object.assign(data.headers || {}, {
          'Authorization': `Bearer ${localStorage.accessToken}`
        })
      })
    }

    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      })
    } catch (error: any) {
      axiosResponse = error.response
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
