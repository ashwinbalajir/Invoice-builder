import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
export interface DialogData {
  firstName: string;
  lastName: string;
  email:string;
}
@Component({
  selector: "app-form-dialog",
  templateUrl: './form-dialog.component.html',
  styleUrls: ["./form-dialog.component.scss"]
})
export class FormDialogComponent implements OnInit {
 clientForm:FormGroup;
  constructor(public dialogRef: MatDialogRef<FormDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData,private fb:FormBuilder) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.initClientForm();
  }
  private initClientForm(){
    this.clientForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required]
    })
  }
}
