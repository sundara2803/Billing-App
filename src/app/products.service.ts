import { Injectable } from '@angular/core';
import { products } from './products/products.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private cart = [];
  constructor() { }
  
  private products: products[] = [
    {
      id: 1,
      productName: 'appConnect',
      imageUrl: 'assets/appConnect.png',
      quantity: 0,
      price: 100
    },
    {
      id: 2,
      productName: 'appCatalog',
      imageUrl: 'assets/appCatalog.png',
      quantity: 0,
      price: 80
    },
    {
      id: 3,
      productName: 'appMigrate',
      imageUrl: 'assets/appMigrate.png',
      quantity: 0,
      price: 100
    },
    {
      id: 4,
      productName: 'appRecon',
      imageUrl: 'assets/appRecon.png',
      quantity: 0,
      price: 120
    },
    {
      id: 5,
      productName: 'appVisualize',
      imageUrl: 'assets/appVisualize.png',
      quantity: 0,
      price: 80
    }
  ];
  getAllProducts() {
    return this.products;
  }
  getCart() {
    return this.cart;
  }
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.quantity += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.quantity = 1;
      this.cart.push(product);
    }
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.quantity -= 1;
        if (p.quantity == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
  }
}