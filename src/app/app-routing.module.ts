import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductlistComponent} from './productlist/productlist.component'
import {HomeComponent} from './home/home.component'
import {ProductdetailsComponent} from './productdetails/productdetails.component'



const routes: Routes = [
  {

    path: '',
    component: HomeComponent,
   
  },
  {

  path: 'productlist',
  component:ProductlistComponent ,
 
},
{

  path: 'productdetails/:id',
  component:ProductdetailsComponent ,
 
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
