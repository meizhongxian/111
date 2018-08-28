///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '../../Common/modal/modal-ref';

@Component({
  selector: 'app-master-create-approval-step',
  templateUrl: './master-create-approval-step.component.html',
  styleUrls: ['./master-create-approval-step.component.css']
})
export class MasterCreateApprovalStepComponent implements OnInit {

  Expert = false;
  Vote = false;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  Close() {
    this.activeModal.close();
  }
}
