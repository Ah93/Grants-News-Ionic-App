import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{
  public grantsList: any[];
  public loadedGrantsList: any[];
  type: string = '';
  all: string = '';
  constructor(private dataService: DataService, public afdm: AngularFireDatabase ) {
   
  }

 ngOnInit(){
  // this.afdm.list('/grant').valueChanges().subscribe(grantsList => {
  //   this.grantsList = grantsList;
  //   this.loadedGrantsList = grantsList;
  //   //console.log(this.grantsList)
  //  });
  
 }
 
 searchChanged(value) {
  this.afdm.list('/grant', ref => ref.orderByChild('Category').equalTo(this.type)).valueChanges().subscribe(grantsList => {
    this.grantsList = grantsList;
    this.loadedGrantsList = grantsList;
    if(this.type === 'all'){
      this.afdm.list('/grant').valueChanges().subscribe(grantsList => {
       this.grantsList = grantsList;
      this.loadedGrantsList = grantsList;
    //console.log(this.grantsList)
   });
      console.log(this.type);
    }
    
  });
}

 initializeGrants(): void {
  this.grantsList = this.loadedGrantsList;
}

filterList(evt) {
  this.initializeGrants();

  const searchTerm = evt.srcElement.value;

  if (!searchTerm) {
    return;
  }
  this.grantsList = this.grantsList.filter(currentGoal => {
    if (currentGoal.title && searchTerm) {
      if (currentGoal.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });
}
}
