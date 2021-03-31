import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero; // @Input() lie le contenu de la variable à l'ngmodel de l'input du html

  constructor(
    private route: ActivatedRoute, // informations sur l’itinéraire vers cette instance du composant et ses données
    private heroService: HeroService, // s'abonne au service heroservice
    private location: Location // service Angular pour interagir avec le navigateur
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // récupère l'id des données envoyées dans l'url
    this.heroService.getHero(id) // acctive la fonction "getHero()" du service en lui donnant l'id
      .subscribe(hero => this.hero = hero); // "subscribe" fait suite au "observable" du service pour gérer l'asynchrone
  }

  goBack(): void {
    this.location.back(); // methode pour revenir à la page précédente 
  }
}
