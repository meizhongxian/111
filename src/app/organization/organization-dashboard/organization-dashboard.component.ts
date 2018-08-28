import { OrganizationCreateApplyforComponent } from './../organization-create-applyfor/organization-create-applyfor.component';
import { NgbModal } from './../../Common/modal/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-dashboard',
  templateUrl: './organization-dashboard.component.html',
  styleUrls: ['./organization-dashboard.component.css']
})
export class OrganizationDashboardComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  CreateApplyFor() {
    this.modalService.open(OrganizationCreateApplyforComponent);
  }
}
