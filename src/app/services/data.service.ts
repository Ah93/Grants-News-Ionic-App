import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})

export class DataService {
  grantsList: any;
  constructor(public afdm: AngularFireDatabase) {
    //  this.itemRef = afdm.object('Grants');
    //   this.ref = this.afdm.database.ref('/Grants');
    this.getGrantsList();
  }

  getGrantsList(){
    this.afdm.list('/grant').valueChanges().subscribe(val => {
        this.grantsList = val;
    })
  }

  }
