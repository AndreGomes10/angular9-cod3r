import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit{
  
  //propLegal= "qualquer" // exemplo de binding
  constructor(private router: Router, private headerService: HeaderService) { /* private router: Router = significa que o angular que uma vez que ele percebeu
  dentro do construtor desse componente ProductCreateComponent eu declarei que vou precisar de um router, ele vai
  ser capaz de fornecer o router se precisar de se preocupar em instanciar um router*/

    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
    
  }

  navigateToProductCreate(): void{
    this.router.navigate(['/products/create'])
  }

  /* Exemplo de binding
  fazerAlgo(): void {
    console.log('Fazendo algo')
  }
  */

}
