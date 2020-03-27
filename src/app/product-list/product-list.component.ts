import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/store/models/Product";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/store/models/app-state.model";
import { v4 as uuid } from "uuid";
import { MatCheckboxChange } from "@angular/material/checkbox";
import {
  getProductsAction,
  getProductsCompleteAction,
  addProductAction,
  editProductAction,
  deleteProductAction
} from "src/store/actions/products.actions";
import { selectListItems } from "src/store/reducers/products.reducer";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  productListItems$: Observable<Product[]>;
  newProduct: Product = { id: "", name: "", complete: false };
  editedProductName: string;

  panelOpenState = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store.dispatch(getProductsAction());
    // this.productListItems$ = this.store.pipe(select(selectListItems));
    this.productListItems$ = this.store.select(store => store.productlist);
  }

  addNewProduct() {
    this.newProduct.id = uuid();
    this.newProduct.complete = false;
    this.store.dispatch(addProductAction({ payload: this.newProduct }));
    this.newProduct = { id: "", name: "", complete: false };
  }

  onRemoveProduct(productToDelete: Product) {
    this.store.dispatch(deleteProductAction({ payload: productToDelete }));
  }

  onEditProductName(productToUpdate: Product) {
    this.store.dispatch(
      editProductAction({
        payload: { ...productToUpdate, name: this.editedProductName }
      })
    );
    this.editedProductName = "";
  }

  onProductCheckChanged(
    productToUpdate: Product,
    checkedEvent: MatCheckboxChange
  ) {
    this.store.dispatch(
      editProductAction({
        payload: { ...productToUpdate, complete: checkedEvent.checked }
      })
    );
  }
}
