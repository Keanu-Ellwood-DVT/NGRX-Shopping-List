import { Action } from '@ngrx/store';
import { Product } from 'src/store/models/Product';

export enum ProductListActionTypes {
  ADD_PRODUCT = '[PRODUCT-LIST] Add Item',
}

export class AddItemAction implements Action {
  readonly type = ProductListActionTypes.ADD_PRODUCT

  constructor(public payload: Product) { }
}

export type ProductListAction = AddItemAction
