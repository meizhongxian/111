import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '../../Common/modal/modal-ref';

@Component({
  selector: 'app-master-audit',
  templateUrl: './master-audit.component.html',
  styleUrls: ['./master-audit.component.css']
})
export class MasterAuditComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  Close() {
    this.activeModal.close();
  }
}
