import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-contact-admin-model',
  templateUrl: './contact-admin-model.component.html',
  styleUrls: ['./contact-admin-model.component.css']
})
export class ContactAdminModelComponent implements OnInit {

   Type: string;
   constructor(public bsModalRef: BsModalRef) {}


  ngOnInit() {
  }

}
