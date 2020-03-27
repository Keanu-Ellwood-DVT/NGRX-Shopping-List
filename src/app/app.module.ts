import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductListReducer } from "src/store/reducers/products.reducer";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import { ActionReducer } from '@ngrx/store';

// Meta-reducers
// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [
    BrowserModule,

    StoreModule.forRoot({
      productlist: ProductListReducer
    }, {metaReducers: [debug]}),
    BrowserAnimationsModule,
    MatListModule,

    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatExpansionModule,
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
