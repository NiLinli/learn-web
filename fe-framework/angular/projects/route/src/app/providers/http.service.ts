import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlOrign: string;
  urlPathName: string;
  urlSearch: string;

  constructor() { }
}
