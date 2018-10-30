import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AchievementsViewModelComponent } from '../Modals/achievements-view-model/achievements-view-model.component';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

   bsModalRef: BsModalRef;

   constructor(private modalService: BsModalService) { }


  ngOnInit() {
  }

  ViewAchievements() {
   const initialState = {
     Type: 'View'
   };
   this.bsModalRef = this.modalService.show(AchievementsViewModelComponent, Object.assign({initialState}, { class: '' }));
 }

}
