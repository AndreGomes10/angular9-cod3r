import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{

  //@Input('myForEm') numbers: number[]

  constructor() {
    //this.numbers = []
    
  }

  ngOnInit(): void {
    //console.log(this.numbers)
  }

}
/*ele vai pegar tudo o que vem depois da palavra chave em*/