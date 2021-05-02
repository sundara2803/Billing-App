import { Component, OnInit } from '@angular/core';
import { products } from './products.model';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: products[];
//  quantity: any;
  constructor(private router: Router,private productsService: ProductsService) { 
  //  this.quantity = 0;
  }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }
  addToCart(product) {
    this.productsService.addProduct(product);
 
  }
  buy() {
    this.router.navigate(['shipment']);
  }
}
