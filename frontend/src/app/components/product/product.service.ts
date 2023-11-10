import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({  /* essa classe pode ser injetada em outras classes*/
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X',{  // pode deixar o X ou escrever qualquer outra coisa ou deixar vazio ''
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']  /* ? é um if*/
    });
  }

  create(product: Product): Observable<Product>{  // vai receber um produto e ele vai retornar um obsevable de produto, vai p backend criar o produto
    return this.http.post<Product>(this.baseUrl, product).pipe(  /*pipe pra tratar o erro*/
      map(obj => obj),
      catchError(e => this.errorHandLer(e))
    );
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id: string): Observable<Product>{
    const url= `${this.baseUrl}/${id}`  /* ele vai trazer o valor do id do produto*/
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product>{
    const url= `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(  /*pipe pra tratar o erro*/
    map(obj => obj),
    catchError(e => this.errorHandLer(e))
  );
  }

  delete(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.delete<Product>(url).pipe(  /*pipe pra tratar o erro*/
    map(obj => obj),
    catchError(e => this.errorHandLer(e))
  );
  }

  errorHandLer(e: any): Observable<any> {
    //console.log(e);
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY;
  }
}
