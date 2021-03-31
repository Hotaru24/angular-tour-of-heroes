import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }// le composant s'abonne au service heroservice

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes() // active la fonction heroservice du service
    .subscribe(heroes => this.heroes = heroes);
  }
}
