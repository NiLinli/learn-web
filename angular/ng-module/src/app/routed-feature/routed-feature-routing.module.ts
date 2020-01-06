import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo1Component } from './demo1/demo1.component';

const demoRoutes: Routes = [
    { path: 'routed-feature', component: Demo1Component }
];

@NgModule({
    imports: [
        RouterModule.forChild(demoRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class RoutedFeatureRouting {

}