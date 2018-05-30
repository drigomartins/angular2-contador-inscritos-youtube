import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CanalComponent } from './canal/canal.component';
import { routing } from './app.routes';
import { BuscaComponent } from './busca/buca.component';

import { HttpClientModule } from '@angular/common/http';
import { BuscaModule } from './busca/busca.module';

import { FormsModule } from '@angular/forms';
import { CanalModule } from './canal/canal.module';


@NgModule({
  declarations: [
    AppComponent, CanalComponent, BuscaComponent
  ],
  imports: [
    BrowserModule, routing, HttpClientModule, BuscaModule, FormsModule, CanalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
