import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from "src/app/service/product.service";
import { Product } from "src/app/models/product";
import { Router } from '@angular/router';
import { AddDishComponent } from 'src/app/components/add-dish/add-dish.component';


@Component({
  selector: 'app-list-dish',
  templateUrl: './list-dish.component.html',
  styleUrls: ['./list-dish.component.css']
})
export class ListDishComponent implements OnInit {

 //  @ViewChild(AddDishComponent) child: AddDishComponent;

  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  products: Product;
  productDetails: Product;
  productAdd: Product;
  flagGetProduct: boolean = false;
  flagAddProduct: boolean = false;
  flagUpdateProduct: boolean = false;
  spinner: boolean = false;

  //delete a product
  deleteProduct(id: number) {
    if (confirm(`STAI PER CANCELLARE IL PRODOTTO CON ID: ${id}. SEI SICURO`)) {
      this.productService
        .delete(id).subscribe(
          val => {
            alert(`Prodotto eliminato correttamente`);
          },

          error => {
            alert('OPS... Si è verificato un errore durante la cancellazione');
          },

          () => {
            console.log('Cancellazione completata');
            this.fetchData();
          }
        );
    }
  }

  //get a product by ID number
  getProduct(id: number) {
    this.productService
      .getById(id).subscribe((dataDetails: Product) => {
        this.productDetails = dataDetails;
        this.flagGetProduct = true;
      });

  }

  updateProduct(id: number) {    
   this.productService
      .getById(id).subscribe((dataDetails: Product) => {
        this.productDetails = dataDetails;        
      });
  }

  //get all my products
  fetchData() {
    this.productService
      .get().subscribe((data: Product) => {
        this.products = data;
        this.spinner = true;
      });
  }


  ngOnInit(): void {
    this.fetchData();   //call this func when start the app
  }

}
