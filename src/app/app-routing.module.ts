import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusinessAddComponent} from './components/business-management/business-add/business-add.component';
import {BusinessListComponent} from './components/business-management/business-list/business-list.component';


const routes: Routes = [
  {path:'business-add', component:BusinessAddComponent},
  {path:'business-list', component:BusinessListComponent},
  { path: '**', pathMatch:'full',redirectTo:'business-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
