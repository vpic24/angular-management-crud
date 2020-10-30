import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/service/product.service";


@Component({
  selector: 'app-details-dish',
  templateUrl: './details-dish.component.html',
  styleUrls: ['./details-dish.component.css']
})
export class DetailsDishComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  @Input() productDetails: Product;
  id: number;

  backHome() {
    this.router.navigate(["/listDish"]);
  }

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





