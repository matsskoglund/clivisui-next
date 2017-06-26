import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/interval';

import { IClimateItem } from './climateItem';

@Injectable()
export class ClimateItemService{
    private _productUrl = 'api/products/products.json';
    private _clivisUrl = 'https://clivis.hem.skoglund.io/api/climate/Reading';

    constructor(private _http: Http){}

   getClimateItem(source:string):Observable<IClimateItem>{
       let clivisUrl:string = 'https://clivis.hem.skoglund.io/api/climate/Reading'
       if(source === 'Nibe')
            clivisUrl = 'https://clivis.hem.skoglund.io/api/climate/Nibe';
        else if(source === 'Netatmo')
            clivisUrl = 'https://clivis.hem.skoglund.io/api/climate/Netatmo';

              

        return this._http.get(clivisUrl)
        .map((response:Response) => <IClimateItem>response.json())
        .do(data => console.log('All: ' + JSON.stringify(data) + clivisUrl))
        .catch(this.handleError);
    }


    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}