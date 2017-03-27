import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
    <nav class='navbar navbar-default'>
    <div class='container-fluid'>
    <a class='navbar-brand'>{{pageTitle}}</a>
   <ul class='nav navbar-nav'>
   <li><a [routerLink]="['/welcome']">Home</a></li>
   <li><a [routerLink]="['/Climate/Reading']">Temperatur</a></li>
    <li><a [routerLink]="['/Climate/Netatmo']">Netatmo</a></li>
    <li><a [routerLink]="['/Climate/Nibe']">Nibe</a></li>
   </ul>
   </div>
   </nav>
   </div>
   <div class='container'>
   <router-outlet></router-outlet>
   </div>
    `
})
export class AppComponent { 
    pageTitle: string = 'Clivis temp visualization';
     getTitle(){ return this.pageTitle; }
}
