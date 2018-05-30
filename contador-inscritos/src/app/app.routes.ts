import { RouterModule, Routes } from '@angular/router';
import { CanalComponent } from './canal/canal.component';
import { BuscaComponent } from './busca/buca.component';

const appRoutes: Routes  = [
  { path: '', component: BuscaComponent },
  { path: 'canal', component: CanalComponent },
  { path: 'canal/:id', component: CanalComponent}
];

export const routing = RouterModule.forRoot(appRoutes);