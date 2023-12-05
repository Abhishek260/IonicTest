import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProfileDetailPage } from 'src/app/models/profile-detail/profile-detail.page';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public router:Router,
    public modalctrl: ModalController
  ) { }

  ngOnInit() {
  }

  naviTest(){
    this.router.navigate(['test'])
  }
  naviToolbar(){
    this.router.navigate(['toolbars'])
  }

  async openProfile(){
    const modal = await this.modalctrl.create({
      component: ProfileDetailPage,
      breakpoints: [0, 0.2, 0.4, 0.5, 0.6, 0.8,1.0],
      initialBreakpoint: 0.5
    });
    await modal.present();
  }
}
