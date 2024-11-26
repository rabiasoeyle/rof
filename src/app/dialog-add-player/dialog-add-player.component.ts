import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
import {MatDialogModule,MatDialogTitle,MatDialogContent,MatDialogActions,MatDialogClose, MatDialogRef} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, NgModel } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-add-player-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
  playerName:string="";
 
  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>){

 }

  onNoClick(): void {
    this.dialogRef.close();
  }
}