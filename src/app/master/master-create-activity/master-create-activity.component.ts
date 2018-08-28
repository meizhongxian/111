import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '../../Common/modal/modal-ref';
import { read } from 'fs';

@Component({
  selector: 'app-master-create-activity',
  templateUrl: './master-create-activity.component.html',
  styleUrls: ['./master-create-activity.component.css']
})
export class MasterCreateActivityComponent implements OnInit {

  ImageUrl = '';

  @ViewChild('CustomFileControl') CustomFileControl: ElementRef;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  Cloas() {
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
}
