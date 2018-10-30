import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-extra-camodal',
  templateUrl: './extra-camodal.component.html',
  styleUrls: ['./extra-camodal.component.css']
})
export class ExtraCAModalComponent implements OnInit {
  sendData: Subject<any>;
  extraCAForm: FormGroup;
  constructor(public modalRef: BsModalRef) { }

  ngOnInit() {
    this.sendData = new Subject();

    this.extraCAForm = new FormGroup({
      sports_name: new FormControl('', [Validators.required]),
      honors: new FormControl('', [Validators.required])
    });
  }
  onSubmit() {
    console.log(this.extraCAForm.value);
    this.sendData.next(this.extraCAForm.value);
    this.modalRef.hide();
  }

}
