import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { format } from 'util';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class ContactoComponent implements OnInit {


  endpoint: string;

  name = '';
  lastname = '';
  email = '';
  tel = '';
  message = '';

  forma: NgForm;


  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
   }


  ngOnInit(): void {
     // Start php via the built in server: $ php -S localhost:8000
    this.endpoint = 'http://www.tensairetail.cl/mensaje/';

  }

  sendEmail() {
    const postVars = {
      name : this.name,
      lastname : this.lastname,
      email : this.email,
      tel : this.tel,
      message : this.message
    };

    // You may also want to check the response. But again, let's keep it simple.
    this.http.post(`${this.endpoint}mensaje.php`, postVars)
        .subscribe(
            response => console.log(response),
            response => console.log(response)
        );
  }


  agregar(articulo) {
    return this.http.post('', JSON.stringify(articulo));
  }

}
