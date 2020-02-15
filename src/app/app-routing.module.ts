import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusinessAddComponent} from './components/business-management/business-add/business-add.component';
import {BusinessListComponent} from './components/business-management/business-list/business-list.component';
import {BusinessPlaceAddComponent} from './components/business-place-management/business-place-add/business-place-add.component';
import {BusinessPlaceListComponent} from './components/business-place-management/business-place-list/business-place-list.component';


const routes: Routes = [
  {path:'business-add', component:BusinessAddComponent},
  {path:'business-list', component:BusinessListComponent},
  {path:'business-place-add/:id', component:BusinessPlaceAddComponent},
  {path:'business-place-list/:id', component:BusinessPlaceListComponent},
  { path: '**', pathMatch:'full',redirectTo:'business-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
