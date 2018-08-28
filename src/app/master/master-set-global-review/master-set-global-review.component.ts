import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '../../Common/modal/modal-ref';

@Component({
  selector: 'app-master-set-global-review',
  templateUrl: './master-set-global-review.component.html',
  styleUrls: ['./master-set-global-review.component.css']
})
export class MasterSetGlobalReviewComponent implements OnInit {

  Steps: string[] = ['', '', '', ''];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  Close() {
    this.activeModal.close();
  }

  Add() {
    this.Steps.push('');
  }

  Remove(index) {
    console.log(index)
    this.Steps.pop();
  }

}
