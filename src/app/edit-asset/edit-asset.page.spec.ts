import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditAssetPage } from './edit-asset.page';

describe('EditAssetPage', () => {
  let component: EditAssetPage;
  let fixture: ComponentFixture<EditAssetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAssetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditAssetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
