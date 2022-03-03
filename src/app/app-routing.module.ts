import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFruitsComponent } from './fruits/detail-fruits/detail-fruits.component';
import { PaginationFruitsComponent } from './fruits/pagination-fruits/pagination-fruits.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fruits', component: PaginationFruitsComponent},
  { path: 'fruits/detail', component: DetailFruitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
