import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  constructor(private http: HttpClient) { }

  loadShoppingList() {
    const jsonFile = `src/assets/products-list.json`;
    return this.http.get(jsonFile);
  }
}
