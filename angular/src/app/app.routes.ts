import { Routes } from '@angular/router';
import {AboutComponent} from "../pages/about/about.component";
import {GridComponent} from "../components/grid/grid.component";

export const routes: Routes = [
  { path: 'about',
    component: AboutComponent},
  { path: '',
    component: GridComponent},
];
