import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-corteplasma',
  templateUrl: './corteplasma.component.html',
  styleUrls: ['./corteplasma.component.scss']
})
export class CorteplasmaComponent implements OnInit {
  estadoPositivo = false;

  constructor(config: NgbCarouselConfig ) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
   }
   img: string;
   img1: '1563461359005.jpg';
   img2: 'IMG_20190531_134924.jpg';
   img3: 'IMG_20190911_134604.jpg';

   cambiaEstado() {
    this.estadoPositivo = !this.estadoPositivo;
    alert('hola');
  }
  antiCambio() {
    // tslint:disable-next-line:no-unused-expression
    this.estadoPositivo = false;
    alert('chao');
    this.img = this.img1;
  }


  ngOnInit(): void {
  }



}

