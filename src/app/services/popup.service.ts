import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatBottomSheet, MatBottomSheetRef } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialog: MatDialog, private bottomSheet: MatBottomSheet) { }

  openModal() {
    // this.dialog.openDialogs(PopupService);
    console.log('Open!');
  }
}
