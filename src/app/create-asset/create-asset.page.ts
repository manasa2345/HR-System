import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'Firebase';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.page.html',
  styleUrls: ['./create-asset.page.scss'],
})
export class CreateAssetPage implements OnInit {

  ref = firebase.database().ref('/asset');
  createAssetForm: FormGroup;

  assets:any = {};

  constructor(private navCtrl: NavController,
    private route: ActivatedRoute,
    private authObj: AngularFireAuth,
    private router: Router,
    private afdb: AngularFireDatabase,
    private formBuilder: FormBuilder) 
    { 
      this.createAssetForm = this.formBuilder.group({
        'id' : [null, Validators.required],
        'type' : [null, Validators.required],
        'location' : [null, Validators.required],
        'department' : [null, Validators.required]
      });
    }

  ngOnInit() {
  }

  createAsset(value) {
  let newInfo = firebase.database().ref('asset/').push();
  newInfo.set(this.createAssetForm.value);
  this.router.navigate(['/asset/'/*+newInfo.key*/]);
  
}

}
