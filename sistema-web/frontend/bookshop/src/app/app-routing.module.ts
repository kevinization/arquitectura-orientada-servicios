import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorsComponent } from './vistas/authors/authors.component';
import { CreateAuthorComponent } from './vistas/authors/create-author/create-author.component';
import { EditAuthorComponent } from './vistas/authors/edit-author/edit-author.component';

import { BooksComponent } from './vistas/books/books.component';
import { CreateBookComponent } from './vistas/books/create-book/create-book.component';
import { EditBookComponent } from './vistas/books/edit-book/edit-book.component';

import { EditorialsComponent } from './vistas/editorials/editorials.component';
import { CreateEditorialComponent } from './vistas/editorials/create-editorial/create-editorial.component';
import { EditEditorialComponent } from './vistas/editorials/edit-editorial/edit-editorial.component';

import { GenresComponent } from './vistas/genres/genres.component';
import { CreateGenreComponent } from './vistas/genres/create-genre/create-genre.component';
import { EditGenreComponent } from './vistas/genres/edit-genre/edit-genre.component';

import { OrdersComponent } from './vistas/orders/orders.component';
import { CreateOrderComponent } from './vistas/orders/create-order/create-order.component';
import { EditOrderComponent } from './vistas/orders/edit-order/edit-order.component';

import { SalesComponent } from './vistas/sales/sales.component';
import { CreateSaleComponent } from './vistas/sales/create-sale/create-sale.component';
import { EditSaleComponent } from './vistas/sales/edit-sale/edit-sale.component';

import { UsersComponent } from './vistas/users/users.component';
import { CreateUserComponent } from './vistas/users/create-user/create-user.component';
import { EditUserComponent } from './vistas/users/edit-user/edit-user.component';

const routes: Routes = [
  // Default route
  { path: '', redirectTo: 'books', pathMatch: 'full' },

  // Authors routes
  { path: 'authors', component: AuthorsComponent },
  { path: 'authors/create', component: CreateAuthorComponent },
  { path: 'authors/delete/:sk', component: AuthorsComponent},
  { path: 'authors/edit/:sk', component: EditAuthorComponent },

  // Books routes
  { path: 'books', component: BooksComponent },
  { path: 'books/create', component: CreateBookComponent },
  { path: 'books/delete/:sk', component: BooksComponent},
  { path: 'books/edit/:sk', component: EditBookComponent },

  // Editorials routes
  { path: 'editorials', component: EditorialsComponent },
  { path: 'editorials/create', component: CreateEditorialComponent },
  { path: 'editorials/edit/:sk', component: EditEditorialComponent },
  { path: 'editorials/delete:sk', component: EditorialsComponent},

  // Genres routes
  { path: 'genres', component: GenresComponent },
  { path: 'genres/create', component: CreateGenreComponent },
  { path: 'genres/edit/:sk', component: EditGenreComponent },
  { path: 'generes/delete/:sk', component: GenresComponent},

  // Orders routes
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/create', component: CreateOrderComponent },
  { path: 'orders/edit/:sk', component: EditOrderComponent },
  { path: 'orders/delete/:sk', component: OrdersComponent},

  // Sales routes
  { path: 'sales', component: SalesComponent },
  { path: 'sales/create', component: CreateSaleComponent },
  { path: 'sales/edit/:sk', component: EditSaleComponent },
  { path: 'sales/delete/:sk', component: SalesComponent},

  // Users routes
  { path: 'users', component: UsersComponent },
  { path: 'users/create', component: CreateUserComponent },
  { path: 'users/edit/:sk', component: EditUserComponent },
  { path: 'users/delete/:sk', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =
  [
    AuthorsComponent,
    CreateAuthorComponent,
    EditAuthorComponent,

    BooksComponent,
    CreateBookComponent,
    EditBookComponent,

    EditorialsComponent,
    CreateEditorialComponent,
    EditEditorialComponent,

    GenresComponent,
    CreateGenreComponent,
    EditGenreComponent,

    OrdersComponent,
    CreateOrderComponent,
    EditOrderComponent,

    SalesComponent,
    CreateSaleComponent,
    EditSaleComponent,

    UsersComponent,
    CreateUserComponent,
    EditUserComponent
  ]