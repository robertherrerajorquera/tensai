import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactoComponent } from './contacto/contacto.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Tensai';

  contacto = null;

  conta = {
    name: null,
    lastname: null,
    correo: null,
    tel: null,
    coti: null
  };
  constructor(private contactoComponent: ContactoComponent) {
  }

  ngOnInit() {
  }

  mensaje() {
    this.contactoComponent.agregar(this.conta).subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'OK') {
        // tslint:disable-next-line:no-string-literal
        alert(datos['mensaje']);
      } else {
        alert('datos no enviados');
      }
    });
  }

  hayRegistros() {
    return true;
  }
}
