import { MasterCreateApprovalStepComponent } from './../master-create-approval-step/master-create-approval-step.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../Common/modal/modal';
import { NgbModalRef } from '../../Common/modal/modal-ref';
import { MasterReviewComponent } from '../master-review/master-review.component';

@Component({
  selector: 'app-master-approval',
  templateUrl: './master-approval.component.html',
  styleUrls: ['./master-approval.component.css']
})
export class MasterApprovalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  ReviewSetting() {
    const modal: NgbModalRef = this.modalService.open(MasterReviewComponent);
  }

  Create() {
    const modal: NgbModalRef = this.modalService.open(MasterCreateApprovalStepComponent);
  }
}
