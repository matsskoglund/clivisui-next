import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClimateItemService } from './climateItem.service';
import { ClimateItemListComponent } from './climateitem-list.component';
import { ClimateDetailComponent} from './climate-detail.component';
import {HouseComponent} from "./house.component";

@NgModule({
    declarations: [
        ClimateItemListComponent,
        ClimateDetailComponent,
        HouseComponent
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