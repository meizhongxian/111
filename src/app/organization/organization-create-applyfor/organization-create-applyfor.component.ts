import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '../../Common/modal/modal-ref';

@Component({
  selector: 'app-organization-create-applyfor',
  templateUrl: './organization-create-applyfor.component.html',
  styleUrls: ['./organization-create-applyfor.component.css']
})
export class OrganizationCreateApplyforComponent implements OnInit {
  ImageUrl = '';
  SearchStudentInfo = false;

  @ViewChild('CustomFileControl') CustomFileControl: ElementRef;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  Close() {
    this.activeModal.close();
  }


  SelectFile(e) {
    this.CustomFileControl.nativeElement.click();
  }

  SelectedFile($event: any) {
    const files = $event.target.files || $event.dataTransfer.files;
    if (files.length === 0) {
      return;
    }

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      this.ImageUrl = reader.result;
    };
  }

  Search() {
    this.SearchStudentInfo = true;
  }
}
