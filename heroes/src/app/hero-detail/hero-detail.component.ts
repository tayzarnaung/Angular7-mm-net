import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    // this.getHero();
  }

  // getHero(): void {
  //   // const id = +this.route.snapshot.paramMap.get('id'); //The JavaScript (+) operator converts the string to a number
  //   const id = +this.route.snapshot.params["id"];

  //   this.heroService.getHero(id)
  //     .subscribe(data => this.hero = data);
  // }

  goBack(): void {
    this.location.back();
  }
}