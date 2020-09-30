import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.page.html',
  styleUrls: ['./asset-details.page.scss'],
})
export class AssetDetailsPage implements OnInit {

  asset={};

  constructor(private route: ActivatedRoute,public router: Router) 
  {
    firebase.database().ref('asset/'+this.route.snapshot.paramMap.get('key')).on('value', resp => {
      console.log(this.route.snapshot.paramMap.get('key'));
      this.asset = snapshotToObject(resp);
   });
  }

  ngOnInit() {
  }

}
export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}
