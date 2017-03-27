import { Component, OnInit, OnDestroy, OnChanges, ElementRef, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';
import { IClimateItem } from './climateItem';
import { ClimateItemService } from './climateItem.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    templateUrl: './climate-detail.component.html',
    styleUrls: ['./climate-detail.component.css']
})

export class ClimateDetailComponent implements OnInit, OnDestroy {
     @ViewChild('canvas') canvasRef:ElementRef;
    private canvas: any;
     data: number[];
     width: number = 900;
     height: number = 850;
     colors: string[];
     title: string;
    
    pageTitle: string = 'Temperature reading';
    climateItem: IClimateItem;
    errorMessage: string;
    timeStamp:string;
    indoorValue:string;
    outdoorValue:string;
    private sub: Subscription;
    private obs: Subscription;
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _climateItemService: ClimateItemService) {
    }

    ngOnInit(): void {
        if(this.sub != null){
             this.sub.unsubscribe();
             console.log('Unsubskribing sub');     
        }

      this.sub = this._route.params.subscribe(
            params => {
                let source:string = params['source'];
                this.getClimateItem(source);
        });
    }

    getClimateItem(source:string) {
        console.log('GetClimateItem');
        
        if(this.obs != null){
             this.obs.unsubscribe();
             console.log('Unsubsribing obs'); 
        }

        this.obs = Observable.timer(0,300000)
        .mergeMap(() => this._climateItemService.getClimateItem(source))
        .subscribe(climateItem => {
                this.climateItem = climateItem; 
                this.timeStamp = climateItem.timeStamp; 
                this.indoorValue = climateItem.indoorValue;
                this.outdoorValue = climateItem.outdoorValue;
                },
            error => this.errorMessage = <any>error);
            
        return this.obs;

    }

    onBack(): void {
        this._router.navigate(['/climate']);
    }

    unsubscribe(){
        this.sub.unsubscribe();
        this.obs.unsubscribe();
        console.log('Unsubscribe');
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
        this.obs.unsubscribe();
        console.log('Unsubscribe');
    }

      /* ngAfterViewInit() {
        console.log("Barchart2Component ngAfterViewInit: width: ", this.width, ", height: ", this.height, ", colors: ", this.colors, ' this.canvas: ', this.canvas);
        this.canvas = this.canvasRef.nativeElement;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.getClimateItem("Nibe");
        //this.draw2();
        
    }*/


}
