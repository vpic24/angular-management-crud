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
    console.log(" sono dentro on changes: productDetails: ", changes.productDetails.currentValue);
    
    this.update(changes.productDetails.currentValue);
    
  }
 
  // CHANGED: tolte funzioni anonime e modificate in metodi di classe

  // CHANGED: tolto il reload e inserito al completamento del create
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

  // CHANGED: lanciata la funzione con l'ngOnInit
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

  // CHANGED: rimosso il reload sull'errore
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
            // window.location.reload();
          },

          () => {
            console.log('aggiornamento completato');
            window.location.reload();
          }
        );
    }

  }

  resetForm() {
    this.productForm.reset();
  }

  backHome() {
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
