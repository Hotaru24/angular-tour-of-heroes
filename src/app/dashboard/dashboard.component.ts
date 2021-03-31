import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }// s'abonne au service hero-serviceS

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes() // le HeroService gère l'asynchrone avec "Observable"
      .subscribe(heroes => this.heroes = heroes.slice(0, 4)); // "suscribe" fait suite au "Observable" dans la gestion de l'assynchrone ) travers une callback
  }
}