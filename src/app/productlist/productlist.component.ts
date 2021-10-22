import { Component, OnInit,ViewChild } from '@angular/core';
import {ProductdetailsService} from './../productdetails.service'
import { Subscription } from 'rxjs';
import {ProductdetailsComponent} from '../productdetails/productdetails.component'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  
  

  products : any
  details: any;
 
  title: any;
  clicked: any;
  id: any;

  constructor(private productdetails: ProductdetailsService) {
    
    
   }

  ngOnInit(): void {
    this.productList()
      
  }
  productList(): void{
  this. productdetails.getProductlist()
  .subscribe(
    (response: any) => {
 console.log(response)
 this.products = response
      
    
    },
    (error: any) => {
      console.log(error);
      
    }
  );
  }
  viewDetails(event:any){
    console.log(event.target.value)
    this.id=event.target.value
   
    // this.clicked=event.target.value
    // this.id=this.clicked["id"]
    // this.title=event.target.value["title"]
    // console.log(this.id)
    // console.log(this.title)


    
    
  }
  

}
