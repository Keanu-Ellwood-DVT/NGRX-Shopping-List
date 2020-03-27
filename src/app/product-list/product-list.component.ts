import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/store/models/Product';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/models/app-state.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productListItems:Observable<Array<Product>>;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.productListItems = this.store.select(store => store.productlist);
  }

}
