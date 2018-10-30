import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ActivityModalComponent } from '../Modals/activity-modal/activity-modal.component';
import { DeleteConfirmationModelComponent } from '../Common-Components/delete-confirmation-model/delete-confirmation-model.component';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
   bsModalRef: BsModalRef;

   constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
   CreateActivity() {
      const initialState = {
      Type: 'Create'
      };
      this.bsModalRef = this.modalService.show(ActivityModalComponent, Object.assign({initialState}, { class: 'model-lg' }));
   }

   ViewActivity() {
      const initialState = {
      Type: 'View'
      };
      this.bsModalRef = this.modalService.show(ActivityModalComponent, Object.assign({initialState}, { class: '' }));
   }
   DeleteActivity() {
      const initialState = {
         Text: 'Activity'
      };
      this.bsModalRef = this.modalService.show(DeleteConfirmationModelComponent, Object.assign({initialState}, { class: 'modal-sm' }));
   }

}
