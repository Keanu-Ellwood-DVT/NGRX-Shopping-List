import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import {
  getProductsAction,
  getProductsCompleteAction
} from "src/store/actions/products.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { EMPTY } from "rxjs";
import { ProductsListService } from "src/services/products-list.service";

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productListService: ProductsListService
  ) {}

  getListItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProductsAction),
      mergeMap(action =>
        this.productListService.loadShoppingList().pipe(
          map(response => {
            return getProductsCompleteAction({
              payload: response["productListItems"]
            });
          }),
          catchError(err => {
            console.error(err);
            return EMPTY;
          })
        )
      )
    )
  );
}
