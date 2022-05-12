import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  product: Product | undefined;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap; //get parameters map
    const productIdFromRoute = Number(routeParams.get('productId')); //get product id

    //find and bind product from product id
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
