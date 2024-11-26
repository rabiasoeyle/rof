import { NgFor, NgStyle } from '@angular/common';
// import { Component, inject, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog,MAT_DIALOG_DATA,MatDialogTitle,MatDialogContent} from '@angular/material/dialog';
import {ChangeDetectionStrategy, Component, inject, model, signal, OnInit} from '@angular/core';
import { GameInfoComponent } from '../game-info/game-info.component';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { Firestore, collection, collectionData, onSnapshot} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgStyle, NgFor, PlayerComponent, MatIconModule, MatButtonModule, DialogAddPlayerComponent, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  game!: Game;
  currentCard:string ='';
  firestore: Firestore = inject(Firestore);
  title = 'ring-of-fire';
  games:any;
  // items$: Observable<any[]>;

  constructor(public dialog: MatDialog){
    const aCollection = collection(this.firestore, 'games');
    
    // this.items$ = collectionData(aCollection).valueChanges().subscribe((game)=>{
    //   console.log("Game"+game);
    // });
    // console.log("Items"+this.items$);
  }
  ngOnInit():void{
    this.newGame();
    console.log(this.game);
  }
  newGame(){
    this.game = new Game;
  }

  takeCard(){
    if(!this.pickCardAnimation){
      if(this.game.stack.length>1){
      this.currentCard = this.game.stack.pop()!;
      }
      console.log(this.game.playedCards);
      this.pickCardAnimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length
      setTimeout(()=>{
        this.game.playedCards.push(this.currentCard);
      },1800);
      setTimeout(()=>{
        this.pickCardAnimation = false;
      },2000);
    }
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {
      // data: {name: this.name(), animal: this.animal()},
    });

    dialogRef.afterClosed().subscribe((playerName:string) => {
      console.log('The dialog was closed '+ playerName);
      if (playerName !== undefined && playerName.length>0) {
        this.game.players.push(playerName)
      }
    });
  }

}