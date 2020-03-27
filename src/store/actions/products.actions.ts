import { Action } from '@ngrx/store';
import { Product } from 'src/store/models/Product';

export enum ProductListActionTypes {
  ADD_PRODUCT = '[PRODUCT-LIST] Add Product',
  DELETE_PRODUCT = '[PRODUCT-LIST] Delete Product',
  EDIT_PRODUCT = '[PRODUCT-LIST] Edit Product'
}

export class AddItemAction implements Action {
  readonly type = ProductListActionTypes.ADD_PRODUCT

  constructor(public payload: Product) { }
}

export class DeleteItemAction implements Action {
  readonly type = ProductListActionTypes.DELETE_PRODUCT

  constructor(public payload: { id: string}) { }
}

export class EditItemAction implements Action {
  readonly type = ProductListActionTypes.EDIT_PRODUCT

  constructor(public payload: {updatedProduct: Product}) { }
}

export type ProductListAction = AddItemAction | DeleteItemAction | EditItemAction
