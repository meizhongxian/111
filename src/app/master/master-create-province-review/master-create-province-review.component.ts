import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '../../Common/modal/modal-ref';

@Component({
  selector: 'app-master-create-province-review',
  templateUrl: './master-create-province-review.component.html',
  styleUrls: ['./master-create-province-review.component.css']
})
export class MasterCreateProvinceReviewComponent implements OnInit {

  constructor(public  activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  Close() {
    this.activeModal.close();
  }
}
