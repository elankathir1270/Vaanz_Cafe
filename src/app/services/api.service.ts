import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface AvailableOptions {
  params: HttpParams;
  headers: HttpHeaders;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public get<T>(path: string, options?: AvailableOptions): Observable<T> {
    return this.http.get<T>(
      this.constructUrlForPath(path),
      this.constructHttpOptions(options)
    );
  }

  public post<T>(
    path: string,
    payload: any,
    options?: AvailableOptions
  ): Observable<T> {
    return this.http.post<T>(
      this.constructUrlForPath(path),
      this.processRequestPayload(payload, options),
      this.constructHttpOptions(options)
    );
  }

  public patch<T>(
    path: string,
    payload: any,
    options?: AvailableOptions
  ): Observable<T> {
    return this.http.patch<T>(
      this.constructUrlForPath(path),
      this.processRequestPayload(payload, options),
      this.constructHttpOptions(options)
    );
  }

  public put<T>(
    path: string,
    payload: any,
    options?: AvailableOptions
  ): Observable<T> {
    return this.http.put<T>(
      this.constructUrlForPath(path),
      this.processRequestPayload(payload, options),
      this.constructHttpOptions(options)
    );
  }

  public delete<T>(path: string, options?: AvailableOptions): Observable<T> {
    return this.http.delete<T>(
      this.constructUrlForPath(path),
      this.constructHttpOptions(options)
    );
  }

  private constructUrlForPath(path: string): string {
    return environment.baseApiEndPoint.concat(path);
  }

  private constructHttpOptions(options: AvailableOptions): {
    params: HttpParams;
    headers: HttpHeaders;
  } {
    return {
      params: options?.params,
      headers: this.constructHeaders(options),
    };
  }

  private processRequestPayload(payload: any, options?: AvailableOptions) {
    return payload;
  }

  private constructHeaders(options: AvailableOptions): HttpHeaders {
    let headers: HttpHeaders;
    return headers;
  }
}
