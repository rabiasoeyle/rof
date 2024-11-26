import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from 'express';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent{
  constructor( private router: Router){

  }
  ngOnInit():void{

  }
  newGame(){
    this.router.navigateByUrl('/game');
  }
}
