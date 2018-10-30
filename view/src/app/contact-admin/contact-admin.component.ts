import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ContactAdminModelComponent } from '../Modals/contact-admin-model/contact-admin-model.component';


@Component({
  selector: 'app-contact-admin',
  templateUrl: './contact-admin.component.html',
  styleUrls: ['./contact-admin.component.css']
})
export class ContactAdminComponent implements OnInit {


   bsModalRef: BsModalRef;

   constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  CreateQuery() {
   const initialState = {
   Type: 'Create'
   };
   this.bsModalRef = this.modalService.show(ContactAdminModelComponent, Object.assign({initialState}, { class: 'model-lg' }));
}

ViewContactAdmin() {
   const initialState = {
   Type: 'View'
   };
   this.bsModalRef = this.modalService.show(ContactAdminModelComponent, Object.assign({initialState}, { class: '' }));
}
}
