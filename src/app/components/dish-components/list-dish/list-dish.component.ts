import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/service/product.service";
import { Product } from "src/app/models/product";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-dish',
  templateUrl: './list-dish.component.html',
  styleUrls: ['./list-dish.component.css']
})
export class ListDishComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) { }

  products: Product;
  productDetails: Product;
  productAdd: Product;
  spinner: boolean = false;

  //delete a product  
  deleteProduct(id: number) {

    if (Swal.fire({
      title: `Stai per eliminare il piatto con id: ${id}.`,
      text: "SEI SICURO",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'Annulla',
      confirmButtonText: 'Si, elimina!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService
          .delete(id).subscribe(
            val => {
              Swal.fire(
                'Prodotto eliminato correttamente!',
                'Il piatto è stato eliminato',
                'success'
              )
            },

            error => {
              Swal.fire({
                icon: 'error',
                title: 'OPS...',
                text: 'Si è verificato un errore durante la scrittura',
              })
            },

            () => {
              console.log('Cancellazione completata');
              this.fetchData();
            }
          );

      }
    })) { }
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
