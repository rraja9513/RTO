import { Component} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  rowi:any[];
  li:any[];

  constructor(private database:AngularFireDatabase,
    ){
    database.list("images/").valueChanges().subscribe(res=>{
    this.li=res.map(items=>{
     return items;
    });
this.rowi=Array.from(Array(Math.ceil(this.li.length/3)).keys());
  });
}
}
