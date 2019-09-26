import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(    private router: Router) {}

  accessories() {
    this.router.navigate(['/menu/accessories']);
  }

  new_in() {
    this.router.navigate(['/menu/newin']);
  }

  cosplay() {
    this.router.navigate(['/menu/cosplay']);
  }

  hoodies() {
    this.router.navigate(['/menu/hoddies']);
  }

}
