import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
//import { Clipboard } from '@ionic-native/clipboard/ngx';
//import * as firebase from 'firebase';

@Component({
  selector: 'app-grants-details-home',
  templateUrl: './grants-details-home.page.html',
  styleUrls: ['./grants-details-home.page.scss'],
})
export class GrantsDetailsHomePage implements OnInit {
   //copyLink:string="";
   grantId = null;
   grantDetails: any;  // Initialize variable to store the recieved data from firebase 
   getCopy: any;
   isFavorite = false;
  constructor(public navCtrl: NavController, 
              private db: AngularFireDatabase, 
              private route: ActivatedRoute,
              private loadingController: LoadingController
             // private Clipboard: Clipboard
              //private clipboard: Clipboard
              ) { }

  ngOnInit() {
    this.grantId = this.route.snapshot.params['id']; //get the id from the route url
    this.loadGrant();
}
async loadGrant() {
  //loading the page
  const loading = await this.loadingController.create({
    message: 'جاري التحميل...'
  });
  await loading.present();

  //query and getting the data from firebase
  this.db.list('/grant', ref => ref.orderByChild('id').equalTo(this.grantId)).valueChanges().subscribe(val => {
    loading.dismiss();
    this.grantDetails = val;
  });
 
}
//copy link function
// copyText(){
//   var query = firebase.database().ref('grant').orderByChild('id').equalTo(this.grantId);
//   query.on('child_added', function(snap) {
//      const grantVal = snap.val();
//      this.getCopy = grantVal.title;
//      console.log(grantVal.Description);   
// });
//   this.clipboard.copy(this.getCopy);
// }
  //  copy(){
  //   this.Clipboard.copy("hhh").then(() => {
  //       alert("Link Copied");
  //    })
  //  }
   /* To copy any Text */
copy(val: string){
  let selBox = document.createElement('textarea');
  selBox.style.position = 'fixed';
  selBox.style.left = '0';
  selBox.style.top = '0';
  selBox.style.opacity = '0';
  selBox.value = val;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand('copy');
  document.body.removeChild(selBox);
  }
  }
 
//}
  
  

   

