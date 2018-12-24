import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  // 注入http
  constructor(private http:HttpClient) { }
  post():void{
    
  }
  get():void{

  }
}
