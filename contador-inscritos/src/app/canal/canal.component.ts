import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanalService } from './canal.service';
import { HttpClient } from '@angular/common/http';

@Component({
    moduleId: module.id,
    selector: 'canal',
    templateUrl: './canal.component.html'
})

export class CanalComponent {

    title: any;
    route: ActivatedRoute;
    canal: any;
    id;

    constructor(route: ActivatedRoute, private canalService: CanalService, private http: HttpClient) {
        this.route = route;

        this.route.params.subscribe(params => {
            this.id = params.id;
        });

        this.canalService.getNomeCanal(this.id)
            .then((dadoss: any) => {
                this.title = dadoss.items;
            })
            .catch((erro) => {
                console.log(erro);
            });

        setInterval(() => { this.realizaBusca(); }, 3000);
    }

    realizaBusca() {
        this.canalService.getCanal(this.id)
            .then((dados: any) => {
                this.canal = dados.items;
            });
    }


}