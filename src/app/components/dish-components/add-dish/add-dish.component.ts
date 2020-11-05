import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit, OnChanges {

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  @Input() productDetails: Product;
  flagBtn: boolean = false;

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    desc: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.pattern('[0.0-9.9]+')]),
  });

  ngOnChanges(changes: SimpleChanges): void {
    this.update(changes.productDetails.currentValue);

  }


  submitBtn() {
    const name = this.productForm.get('name').value;
    const desc = this.productForm.get('desc').value;
    const type = this.productForm.get('type').value;
    const price = this.productForm.get('price').value;

    if (this.productForm.valid) {
      this.create({ name, desc, type, price });
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'OPS...',
        text: 'Qualcosa è andato storto',
      })
    }
  }

  //create e new product
  create(product: Product) {
    this.productService.create(product).subscribe(

      val => {
        Swal.fire({
          icon: 'success',
          title: 'Perfetto',
          text: 'Prodotto inserito correttamente',
        })
        this.router.navigate(["/dish/listDish"]);
      },

      error => {
        Swal.fire({
          icon: 'error',
          title: 'OPS...',
          text: 'Si è verificato un errore durante la scrittura',
        })
      },

      () => { console.log('Creazione completata'); }
    );
  }

  update(product: Product) {

    this.flagBtn = true;

    if (product) {
      this.productForm.setValue({
        name: product.name,
        desc: product.desc,
        type: product.type,
        price: product.price
      });
    }
  }

  //update a product
  updateBtn(product: Product) {
    if (Swal.fire({
      title: `Stai per aggiornare il piatto con id: ${product.id}.`,
      text: "SEI SICURO",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ffc106',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'Annulla',
      confirmButtonText: 'Si, Aggiorna!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService
          .update(this.productForm.value, product.id).subscribe(
            val => {
              Swal.fire(
                'Prodotto Aggiornato correttamente!',
                'Il piatto è stato modificato',
                'success'
              )
            },

            error => {
              Swal.fire({
                icon: 'error',
                title: 'OPS...',
                text: "Si è verificato un errore durante l'aggiornamento",
              })
            },

            () => {
              console.log('Aggiornamento completato');
              this.router.navigate(["/dish/listDish"]);
            }
          );

      }
    })) { }

  }

  resetForm() {
    this.productForm.reset();
  }

  backHome() {
    this.router.navigate(["/dish/listDish"]);
  }

  ngOnInit(): void {
  }

}
