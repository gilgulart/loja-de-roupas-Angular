import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { About } from './components/pages/about/about';
import { Collection } from './components/pages/collection/collection';
import { Lookbook } from './components/pages/lookbook/lookbook';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'collections', component: Collection },
    { path: 'lookbook', component: Lookbook }
];
