import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: any;
  address: any;
  noOfProducts: any;
  totalPrice: any;
  constructor(private activatedRoute: ActivatedRoute,private router: Router) { }
  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.address = this.activatedRoute.snapshot.paramMap.get('address');
    this.noOfProducts = this.activatedRoute.snapshot.paramMap.get('noOfProducts');
    this.totalPrice = this.activatedRoute.snapshot.paramMap.get('totalPrice');
  }

  addSales() {
    this.router.navigate(['products']);
}
}
