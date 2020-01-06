import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Http } from '@angular/http';

export interface HttpReturnValue {
  code: string;
  data: any;
}

export class UnexceptionReturn {
  name = 'UnexceptionReturn';
  constructor(
    public message: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient,
    private httpOld: Http
  ) {
  }

  getData0(): Observable<HttpReturnValue> {
    return this.http.get<HttpReturnValue>('./mock-data/test.json', {
      params: {
        name: 'nixixi000',
        age: '180'
      }
    }).pipe(
      map((v) => {
        if (v.code === '000') {
          return v.data;
        } else {
          throw new UnexceptionReturn(v.code);
        }
      }),
      catchError(this.handleError)
    );
  }

  getData1(): Observable<any> {
    return this.http.get('http://192.168.0.143:8060', {
      observe: 'response'
    });
  }

  getData2(): Observable<any> {
    return this.http.get('http://192.168.0.143:8060', {
      responseType: 'text'
    });
  }

  postData(): Observable<any> {
    const obj = {
      name: 'nixixi-post',
      age: 180
    };

    // 不可变对象, 所以每次使用都要重新赋值变量
    let body: HttpParams = new HttpParams();
    body = body.append('name', 'nixixi-pos');
    body = body.append('age', '18');

    return this.http.post('http://192.168.0.143:8060', body,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'my-auth-token'
        })
      }
    );
  }

  postData2(): Observable<any> {
    const obj = {
      name: 'nixixi-post',
      age: 180
    };

    return this.http.post('http://192.168.0.143:8060', obj,
      {
        headers: new HttpHeaders({
          'Authorization': 'my-auth-token'
        })
      }
    );
  }

  putData(): Observable<any> {
    return this.http.put('http://192.168.0.143:8050', null, {});
  }

  deleteData(): Observable<any> {
    return this.http.delete('http://192.168.0.143:8050');
  }

  // 退化为 Promise()
  getDataWithPromise(): Promise<any> {
    return this.http.get('http://192.168.0.143:8060', {
      params: {
        name: 'nixixi000',
        age: '180'
      }
    }).toPromise();
  }

  // old
  getDataWithPromise_Old(): Promise<any> {
    return this.httpOld.get('http://192.168.0.143:8060', {
      params: {
        name: 'nixixi000',
        age: '180'
      }
    }).toPromise();
  }

  private handleError(error: HttpErrorResponse | UnexceptionReturn) {
    if (error instanceof HttpErrorResponse) {
      // backend error
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      return throwError(`HER-${error.status}`);
    } else if (error instanceof UnexceptionReturn) {
      // 返回数据不为 000 的数据
      return throwError(`ER-${error.message}`);
    } else {
      // unknow
      console.log(error);
      return throwError(`999`);
    }
  }
}
