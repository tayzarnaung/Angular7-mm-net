import { Component, OnInit } from '@angular/core';

import {Hero} from "../hero"
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

// heroes = HEROES;
heroes : Hero[];

  constructor(private heroService : HeroService, private smsService : MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(data => this.heroes = data);
  }

  selectedHero : Hero;
  onSelect(myhero : Hero) : void {
    this.smsService.add(`Fetced hero at id=${myhero.id}`)
    this.selectedHero = myhero;
  }
}
