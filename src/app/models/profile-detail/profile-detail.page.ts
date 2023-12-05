import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.page.html',
  styleUrls: ['./profile-detail.page.scss'],
})
export class ProfileDetailPage implements OnInit {

  constructor(
    public modelctrl:ModalController
  ) { }

  ngOnInit() {
  }

close(){
  this.modelctrl.dismiss();
}
}
