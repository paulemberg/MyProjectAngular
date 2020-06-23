import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: []
})
export class DataBindingComponent {
    public contadorCliques: number = 0
    public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg"; //"https://www.google.com.br";
    public nome: string = "";
    
    adcionarCliques(){
        this.contadorCliques++;
    }

    zerarCliques(){
        this.contadorCliques = 0;
    }
}
