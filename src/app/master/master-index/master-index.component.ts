import {Component, OnInit} from '@angular/core';
import {NgbModal} from "../../Common/modal/modal";
import {MasterCreateActivityComponent} from "../master-create-activity/master-create-activity.component";

@Component({
  selector: 'app-master-index',
  templateUrl: './master-index.component.html',
  styleUrls: ['./master-index.component.css']
})
export class MasterIndexComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  Create() {
    this.modalService.open(MasterCreateActivityComponent);
  }
}
