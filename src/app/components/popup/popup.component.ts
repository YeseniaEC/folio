import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  constructor(private bottomSheet: MatBottomSheet, public dialog: MatDialog) { }

  openDialog() {
    this.bottomSheet.open(PopupComponent);
    console.log('Dialog Opened!!!');
  }


}

