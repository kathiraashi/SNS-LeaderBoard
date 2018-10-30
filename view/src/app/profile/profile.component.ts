import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ProfileModalComponent } from '../Modals/profile-modal/profile-modal.component';
import { AcademicModalComponent } from '../Modals/academic-modal/academic-modal.component';
import { ExtraCAModalComponent } from '../Modals/extra-camodal/extra-camodal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  //  const bgColorvalue = ;
  dob = 'xxx';
  c_number = 'xxx';
  p_number = 'xxx';
  address = 'xxx';

  graduate = 'xxx';
  percentage = 'xxx';
  y_passing = 'xxx';

  sports_name = 'xxx';
  honors = 'xxx';

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  openProfileUpdateModal() {
    this.bsModalRef = this.modalService.show(ProfileModalComponent);
    this.bsModalRef.content.sendData.subscribe(profileForm => {
      // console.log('profile form value =>' + profileForm);
      this.dob = profileForm.dob;
      this.c_number = profileForm.c_number;
      this.p_number = profileForm.p_number;
      this.address = profileForm.address;
    });
  }
  openAcademicUpdateModal() {
    this.bsModalRef = this.modalService.show(AcademicModalComponent);
    this.bsModalRef.content.sendData.subscribe(academicForm => {
      this.graduate = academicForm.graduate;
      this.percentage = academicForm.percentage;
      this.y_passing = academicForm.y_passing;
    });
  }
  openExtraCAUpdateModal() {
    this.bsModalRef = this.modalService.show(ExtraCAModalComponent);
    this.bsModalRef.content.sendData.subscribe(extraCAForm => {
      this.sports_name = extraCAForm.sports_name;
      this.honors = extraCAForm.honors;
    });
  }
}
