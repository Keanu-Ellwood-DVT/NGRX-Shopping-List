import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/store/models/Product";
import { Store } from "@ngrx/store";
import { AppState } from "src/store/models/app-state.model";
import { v4 as uuid } from "uuid";
import {
  AddItemAction,
  DeleteItemAction,
  EditItemAction
} from "src/store/actions/products.actions";
import { MatCheckboxChange } from '@angular/material/checkbox';
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  productListItems$: Observable<Product[]>;
  newProduct: Product = { id: "", name: "", complete: false};
  editedProductName: string;

  panelOpenState = false;
  //checked = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.productListItems$ = this.store.select(store => store.productlist);
  }

  addProduct() {
    this.newProduct.id = uuid();
    this.store.dispatch(new AddItemAction(this.newProduct));
    this.newProduct = { id: "", name: "", complete: false };
  }

  deleteProduct(id: string) {
    this.store.dispatch(new DeleteItemAction({ id }));
  }

  editProductName(productToUpdate: Product) {
    this.store.dispatch(
      new EditItemAction({updatedProduct:{
        ...productToUpdate,
        name: this.editedProductName
      }})
    );
    this.editedProductName = "";
  }

  editProductCheck(productToUpdate: Product, checkedEvent: MatCheckboxChange) {
    this.store.dispatch(
      new EditItemAction({updatedProduct:{
        ...productToUpdate,
        complete: checkedEvent.checked
      }})
    );
  }
}
