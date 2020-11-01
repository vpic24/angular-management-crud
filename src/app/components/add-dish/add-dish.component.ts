import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit,OnChanges {

  constructor(
    private productService: ProductService,
    private router: Router,
    ) { }

  @Input() productDetails: Product;
  // products: Product;
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
      this.create({name, desc, type, price});
    }
    else {
      alert("Qualcosa è andato storto!!!");
    }
  }

    //create e new product
  create(product: Product) {
    this.productService.create(product).subscribe(

      val => {
        alert(`Prodotto inserito correttamente`);
        this.router.navigate(["/listDish"]);
      },

      error => {
        alert('OPS... Si è verificato un errore durante la scrittura');
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
    if (confirm(`STAI PER AGGIORNARE IL PRODOTTO CON ID:${product.id} SEI SICURO?`)) {
      this.productService
        .update(this.productForm.value, product.id).subscribe(
          val => {
            alert(`PIATTO ID:${product.id} AGGIORNATO`);
          },

          error => {
            alert(`OPS... Si è verificato un errore durante l'aggiornamento`);
          },

          () => {
            console.log('aggiornamento completato');
            this.router.navigate(["/listDish"]);
          }
        );
    }

  }

  resetForm() {
    this.productForm.reset();
  }

  backHome() {
    this.router.navigate(["/listDish"]);
  }

  ngOnInit(): void {
  }

}
