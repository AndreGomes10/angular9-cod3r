import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router} from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{

  product: Product = {
    name: '',
    price: 0
  }
  
  constructor(private productService: ProductService, private router: Router){ 
  }

  ngOnInit(): void {
    //this.productService.showOnColsole('teste...')
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe(() =>{
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })
  }

  // cancel() vamosusar pra navegar pra outra tela
  cancel(): void{
    this.router.navigate(['/products'])
  }

}
