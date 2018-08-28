import {MasterSetGlobalReviewComponent} from './../master-set-global-review/master-set-global-review.component';
import {NgbModalRef} from './../../Common/modal/modal-ref';
import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalOptions} from '../../Common/modal/modal';
import {MasterCreateProvinceReviewComponent} from '../master-create-province-review/master-create-province-review.component';
import {MODALSIZE_FULL, MODALSIZE_LG} from '../../Common/modal/modal-const';

@Component({
  selector: 'app-master-review',
  templateUrl: './master-review.component.html',
  styleUrls: ['./master-review.component.css']
})
export class MasterReviewComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  SetGlobal() {
    const modal: NgbModalRef = this.modalService.open(MasterSetGlobalReviewComponent);
  }

  SetProvince() {
    const modal: NgbModalRef = this.modalService.open(MasterCreateProvinceReviewComponent, {size: MODALSIZE_LG});
  }
}
