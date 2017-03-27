import {Component, OnInit, OnDestroy } from '@angular/core';

import { ClimateItemService } from './climateItem.service';
import { IClimateItem } from './climateItem';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl:'./climateItem-list.component.html',
    //styleUrls: ['app/products/product-list.component.css']
})
export class ClimateItemListComponent implements OnInit, OnDestroy{
    private sub: any;
    pageTitle: string = 'Temperature List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    climateItem: IClimateItem;
  timeStamp:string;
  indoorValue:string;
  outdoorValue:string;
    constructor(private _climateItemService:ClimateItemService){
    }

    toggleImage(): void{
        this.showImage = !this.showImage;

    }

    ngOnInit(): void{

         this.sub = this._climateItemService.getClimateItem('Reading')
         .subscribe(
            climateItem => {
                this.climateItem = climateItem; 
                this.timeStamp = climateItem.timeStamp; 
                this.indoorValue = climateItem.indoorValue;
                this.outdoorValue = climateItem.outdoorValue;
                },
            error => this.errorMessage = <any>error);

    }

    onRatingClicked(message:string):void{
        this.pageTitle = 'Temperature List: ' + message;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
        console.log('Unsubscribe');
    }
  
}