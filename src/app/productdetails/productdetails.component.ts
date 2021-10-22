import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductdetailsService} from '../productdetails.service'
import {Product} from '../productlist'

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productid: any
  products:Product[]=[];
  Ppricing: any;


  constructor(private activateRoute:ActivatedRoute,
    private productdetails: ProductdetailsService) { }

  ngOnInit(): void {
    this.productid=this.activateRoute.snapshot.paramMap.get('id')
    console.log(this.productid)
    this.productList()
   
  }
  productList(): void{
    this. productdetails.getProductlist()
    .subscribe(
      (response: any ) => {

   this.products=response[this.productid-1].description
   this.Ppricing=response[this.productid-1].price
   console.log(this.products)
   
        
      
      },
      (error: any) => {
        console.log(error);
        
      }
    );
    }

}
