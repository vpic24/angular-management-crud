import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-dish',
  templateUrl: './update-dish.component.html',
  styleUrls: ['./update-dish.component.css']
})
export class UpdateDishComponent implements OnInit {

  constructor(
    private productService : ProductService,
    private route: ActivatedRoute
  ) { }

  id: number;
  @Input() productDetails: Product

  getProduct(id: number) {
    this.productService
      .getById(id).subscribe((dataDetails: Product) => {
        this.productDetails = dataDetails;
      });

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
    });
    this.getProduct(this.id);
  }

}
