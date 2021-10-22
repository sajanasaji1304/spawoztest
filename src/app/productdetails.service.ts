import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from './productlist'
@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {
  headers = {
    headers: new HttpHeaders({        
        'Content-Type': 'application/json'
    })
  };

  constructor(private http:HttpClient) { }
  getProductlist():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(' https://fakestoreapi.com/products',this.headers)
    
  }
}
