import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute)
    {}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(id != null){
    this.productService.readById(id).subscribe(product => {
      this.product = product
    });
    }else{
      console.log("Id vazio");
    }
  }

  deleteProduct(): void {
    this.productService.delete(this.product).subscribe(() => {
      this.productService.showMessage('Produto excluido com sucesso!');
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
