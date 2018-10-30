import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent implements OnInit {
  sendData: Subject<any>;
  profileForm: FormGroup;
  constructor(public modalRef: BsModalRef) { }

  ngOnInit() {
    this.sendData = new Subject();

    this.profileForm = new FormGroup({
      dob: new FormControl('', [Validators.required]),
      c_number: new FormControl('', [Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(10),
        Validators.maxLength(10)]),
      p_number: new FormControl('', [Validators.required,
      Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
      address: new FormControl('', [Validators.required])
    });
  }
  onSubmit() {
    // console.log(this.profileForm.value);
    this.sendData.next(this.profileForm.value);
    this.modalRef.hide();
  }
}
