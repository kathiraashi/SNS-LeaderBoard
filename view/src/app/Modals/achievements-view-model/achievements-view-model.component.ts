import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-achievements-view-model',
  templateUrl: './achievements-view-model.component.html',
  styleUrls: ['./achievements-view-model.component.css']
})
export class AchievementsViewModelComponent implements OnInit {

   Type: string;
   constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

}
