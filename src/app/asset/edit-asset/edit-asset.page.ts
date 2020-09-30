import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';



@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.page.html',
  styleUrls: ['./edit-asset.page.scss'],
})
export class EditAssetPage implements OnInit {

  
  ref = firebase.database().ref('/asset');
  editAssetForm: FormGroup;
  key:any;
  constructor(
    private route: ActivatedRoute,public router: Router, private formBuilder: FormBuilder) 
    {
      this.editAssetForm = this.formBuilder.group({
        'id' : [null, Validators.required],
        'type' : [null, Validators.required],
        'email' : [null, Validators.required],
        'department' : [null, Validators.required],
       
     });
     this.getAssetInfo(this.route.snapshot.paramMap.get('key'));
     //console.log("key",this.key);
    }

  ngOnInit() {
  }

  getAssetInfo(key)
  {
    firebase.database().ref('asset/'+key).on('value',resp =>
    {
     let asset =snapshotToObject(resp);
     console.log(asset);
     this.editAssetForm.controls['id'].setValue(asset.id);
     this.editAssetForm.controls['type'].setValue(asset.type);
     this.editAssetForm.controls['location'].setValue(asset.location);
     this.editAssetForm.controls['department'].setValue(asset.department); 
    });
  }
  updateAsset()
  {
    let newInfo = firebase.database().ref('asset/'+this.route.snapshot.paramMap.get('key')).update(this.editAssetForm.value);
  this.router.navigate(['/asset/'+this.route.snapshot.paramMap.get('key')]);
  }

}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  // console.log(snapshot);
  item.key = snapshot.key;
  return item;
}

