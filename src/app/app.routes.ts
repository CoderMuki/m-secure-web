import { Routes } from '@angular/router';
import { DevComponent } from './dev/dev.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'dev'},
    {path: 'dev', component: DevComponent}
];
