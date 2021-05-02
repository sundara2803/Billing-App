import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { products } from '../products/products.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.page.html',
  styleUrls: ['./shipment.page.scss'],
})
export class ShipmentPage implements OnInit {
  products: products[];
  cart = [];
 
  
 
  //param3 = '';
  shipmentForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    address: ['', [Validators.required, Validators.maxLength(100)]]
  });
  get name() {
    return this.shipmentForm.get("name");
  }
  get address() {
    return this.shipmentForm.get("address");
  }
  public errorMessages = {
    name: [
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', message: 'Name cant be longer than 50 characters' }
    ],
    address: [
      { type: 'required', message: 'Address is required' },
      { type: 'maxlength', message: 'Name cant be longer than 100 characters' }
    ]
  }
  public submit() {
    console.log(this.shipmentForm.value);
  }
  constructor(private formBuilder: FormBuilder,private router: Router,private productsService:ProductsService,private alertCtrl: AlertController) { }
  noOfProducts;
  ngOnInit() {
    this.products = this.productsService.getAllProducts();
    this.cart = this.productsService.getCart();
    this.noOfProducts=this.cart.length;
  }
  decreaseCartItem(product) {
    this.productsService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.productsService.addProduct(product);
  }
  totalPrice;
  getTotal() {
    this.totalPrice = this.products.reduce((i, j) => i + j.price * j.quantity, 0);
    return this.totalPrice;
  }
  

  1
  async checkout() {
    // Perfom PayPal or Stripe checkout process
 
    let alert = await this.alertCtrl.create({
      header: 'Thanks for your Order!',
      message: 'order successful',
      buttons: ['OK']
    });
    alert.present();
    //this.router.navigate(['home']);
  //  this.router.navigate(['home/' + this.name.value + '/' + this.address.value]);
    this.router.navigate(['home/' + this.name.value + '/' + this.address.value + '/' + this.noOfProducts + '/' + this.totalPrice]);
  }

}
