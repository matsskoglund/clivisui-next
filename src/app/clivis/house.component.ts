import { Component, ElementRef, OnChanges,Input, OnInit,ViewChild  } from '@angular/core';

@Component({
    selector: 'house',
    styles: [`
        h1.title {
            text-align: center;
            margin:0;
            font-size: 1.6em;
        }
    `],
    template: `
      <div [style.width]="width">
        <canvas #canvas></canvas>
      </div>
  `
})
export class HouseComponent implements OnInit,OnChanges{
    @ViewChild('canvas') canvasRef:ElementRef;
    private canvas: any;
    private done:boolean = false;

    @Input() width: number;
    @Input() height: number;

    @Input() title: string;
    @Input() indoor: string;
    @Input() outdoor: string;
    @Input() timeStamp: string;

    constructor() {
        console.log("HouseComponent constructor: width: ", this.width, ", height: ", this.height, ' this.canvas: ', this.canvas);
    }

    ngOnInit() {
        console.log("HouseComponent ngOnInit: width: ", this.width, ", height: ", this.height,' this.canvas: ', this.canvas);
    }

    ngAfterViewInit() {
        console.log("HouseComponent ngAfterViewInit: width: ", this.width, ", height: ", this.height, ' this.canvas: ', this.canvas);
        this.canvas = this.canvasRef.nativeElement;
        this.canvas.width = this.width;
        this.canvas.height = this.height;       
        this.done = true;
    }
    ngOnChanges(){
        if(this.done)
             this.draw2();
    }

        draw2() {
           console.log("drawing");
        if(this.canvas.getContext) {
         
         
var ctx = this.canvas.getContext("2d");
ctx.font = "160px Arial";
   ctx.clearRect(0, 0, 900, 850);
// Backdrop
ctx.beginPath();
let deltaXB = 180;
let deltaYB = 30;
ctx.moveTo(0 + deltaXB,300 + deltaYB);
ctx.lineTo(300+deltaXB,0  +  deltaYB);
ctx.lineTo(600+deltaXB,300 +  deltaYB);
ctx.lineTo(560+deltaXB,300 +  deltaYB);
ctx.lineTo(560+deltaXB,700 +  deltaYB);
ctx.lineTo(40+deltaXB,700 +  deltaYB);
ctx.lineTo(40+deltaXB,300 +  deltaYB);
ctx.lineTo(0+deltaXB,300 +  deltaYB);

ctx.stroke();
// Fill
var grd=ctx.createLinearGradient(900,700,300,200);
let indoor:number = parseFloat(this.indoor);
var outdoor= parseFloat(this.outdoor);

    if (outdoor > 24) {
        grd.addColorStop(1, "crimson");
    } else if ((outdoor <= 24) && (outdoor > 15)) {
        grd.addColorStop(1, "green");
    } else if ((outdoor <= 15) && (outdoor > 0)) {
        grd.addColorStop(1, "PaleTurquoise");
    } else if ((outdoor <= 0) && (outdoor > -5)) {
        grd.addColorStop(1, "LightSkyBlue");
    } else if ((outdoor <= -5) && (outdoor > -10)) {
        grd.addColorStop(1, "cyan");
    } else {
        grd.addColorStop(1, "DodgerBlue");
    }

    if (indoor > 24) {
        grd.addColorStop(0, "Crimson");
    } else if ((indoor <=24) && (indoor > 21.5)){
        grd.addColorStop(0, "green");
    } else if ((indoor <= 21.5) && (indoor > 19.5)) {
        grd.addColorStop(0, "lightgreen");
    } else if ((indoor <= 19.5) && (indoor > 17)) {
        grd.addColorStop(0, "LightSkyBlue");
    } else {
        grd.addColorStop(0, "RoyalBlue");
    }
ctx.fillStyle=grd;
ctx.fill();

// Foreground
//ctx.beginPath();
let deltaX = 100;
let deltaY = 70;

// Connect
// Fyll H�gerv�ggen
ctx.beginPath();
// Takutspr�ng
ctx.moveTo(560+deltaXB,300 +  deltaYB);

// H�gerv�gg Backdrop
// H�gerv�gg
ctx.lineTo(560+deltaXB,700 +  deltaYB);

// �ver till f�rgrund
ctx.lineTo(560+deltaX,700 +  deltaY);

// H�gerv�gg f�rgrund
ctx.lineTo(560+deltaX,300 +  deltaY);

// �ver till Backdrop
ctx.lineTo(600+deltaXB,300 +  deltaYB);

ctx.stroke();
ctx.fill();

ctx.beginPath();

//Tak
ctx.moveTo(300+deltaXB,0  +  deltaYB);


// Tak
ctx.lineTo(600+deltaXB,300 +  deltaYB);

// �ver till f�rgrund
ctx.lineTo(600+deltaX,300 +  deltaY);

// Tak
ctx.lineTo(300+deltaX,0  +  deltaY);

// Över till startpunkt
ctx.lineTo(300+deltaXB,0 +  deltaYB);

ctx.stroke();


// förgrund

// Tak
ctx.moveTo(0 + deltaX,300 +  deltaY);
ctx.lineTo(300+deltaX,0  +  deltaY);
ctx.lineTo(600+deltaX,300 +  deltaY);
ctx.fill();

// Takutspr�ng
ctx.lineTo(560+deltaX,300 +  deltaY);

// H�gerv�gg
ctx.lineTo(560+deltaX,700 +  deltaY);

//Golv
ctx.lineTo(40+deltaX,700 +  deltaY);

// V�nsterv�gg
ctx.lineTo(40+deltaX,300 +  deltaY);

// V�nster takutspr�ng
ctx.lineTo(0+deltaX,300 +  deltaY);

ctx.stroke();
ctx.fill();


// Skorsten
ctx.beginPath();
ctx.moveTo(400+deltaX,40+deltaY);
ctx.lineTo(400+deltaX,-30 +  deltaY);
ctx.lineTo(450+deltaX,-30 +  deltaY);
ctx.lineTo(450+deltaX,80 +  deltaY);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.moveTo(380+deltaX,50+deltaY);
ctx.lineTo(380+deltaX,-20 +  deltaY);
ctx.lineTo(430+deltaX,-20 +  deltaY);
ctx.lineTo(430+deltaX,90 +  deltaY);
ctx.stroke();
ctx.fill();

// Topp
ctx.beginPath();
ctx.moveTo(380+deltaX,-20+deltaY);
ctx.lineTo(400+deltaX,-30 +  deltaY);
ctx.lineTo(450+deltaX,-30 +  deltaY);
ctx.lineTo(430+deltaX,-20 +  deltaY);
ctx.lineTo(380+deltaX,-20 +  deltaY);

ctx.stroke();
ctx.fill();

    // H�r

ctx.moveTo(600 + deltaX,300 + deltaY);
ctx.lineTo(300+deltaX,deltaY);
ctx.stroke();
ctx.fillStyle="#000000";



ctx.fillText(outdoor,100,130);

ctx.fillText(indoor,250,575);  
ctx.font = "16px Arial";
let tid = this.timeStamp.substr(11,5);
let hour:number = parseInt(tid.substr(0,2)) + 2;
let min:string = tid.substr(3,2);

let tidStr:string = hour.toString() + ':' + min;


ctx.fillText("Senast uppdaterad: " + tidStr,300,800);       }
    }

}