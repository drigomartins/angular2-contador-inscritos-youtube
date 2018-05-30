import { Component } from '@angular/core';
import { BuscaService } from './busca.service';

@Component({
    moduleId: module.id,
    selector: 'busca',
    templateUrl: './busca.component.html'
})

export class BuscaComponent{

    canal:string;
    canais: any = [];

    constructor(private buscaService: BuscaService){
        
    }

    buscaCanal(){
        this.buscaService.getLista(this.canal)
        .then((dado: any) => {
            this.canais = dado.items;
        })
        .catch((erro) => {
            console.log(erro);
        });
    }
}