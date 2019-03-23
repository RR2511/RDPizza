import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromServices from './services';
import { ClarityModule } from '@clr/angular';

export const ROUTES: Routes = [
  { path: '', component: fromContainers.ProductsComponent },
  { path: ':id', component: fromContainers.ProductItemComponent },
  { path: 'new', component: fromContainers.ProductItemComponent }
];

@NgModule({
  imports: [
    ClarityModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, fromComponents.components]
})
export class ProductsModule {}
