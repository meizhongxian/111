import {Component, OnInit} from '@angular/core';
import {MasterReviewComponent} from '../master-review/master-review.component';
import {NgbModal} from '../../Common/modal/modal';
import {NgbModalRef} from '../../Common/modal/modal-ref';
import {MasterAuditComponent} from '../master-audit/master-audit.component';

@Component({
  selector: 'app-master-dashboard',
  templateUrl: './master-dashboard.component.html',
  styleUrls: ['./master-dashboard.component.css']
})
export class MasterDashboardComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  ReviewSetting() {
    const modal: NgbModalRef = this.modalService.open(MasterReviewComponent);
  }

  Audit() {
    this.modalService.open(MasterAuditComponent);
  }
}
