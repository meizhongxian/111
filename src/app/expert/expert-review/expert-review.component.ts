import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "../../Common/modal/modal-ref";

@Component({
  selector: 'app-expert-review',
  templateUrl: './expert-review.component.html',
  styleUrls: ['./expert-review.component.css']
})
export class ExpertReviewComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  Close() {
    this.activeModal.close();
  }
}
