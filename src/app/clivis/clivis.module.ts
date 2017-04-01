import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClimateItemService } from './climateItem.service';
import { ClimateItemListComponent } from './climateitem-list.component';
import { ClimateDetailComponent} from './climate-detail.component';
import {Barchart2Component} from "./barchart2.component";

@NgModule({
    declarations: [
        ClimateItemListComponent,
        ClimateDetailComponent,
        Barchart2Component
    ],
    imports:[
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'Climate', component:ClimateItemListComponent },
            { path: 'Climate/:source',
                component: ClimateDetailComponent
            }
        ])
    ],
    providers: [
        ClimateItemService
    ]
})
export class ClivisModule{}