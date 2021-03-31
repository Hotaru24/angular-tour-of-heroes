import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService) { } // le service hero-service est abonné au service messageService

  getHeroes(): Observable<Hero[]> {// Observable gère l'asynchrone par rapport au temps de fetch 
    this.messageService.add('HeroService: fetched heroes'); // envoie le message en string au messager-service 
    return of(HEROES); // partage la liste de heros récupérée depuis mock-heroes
  }

  getHero(id: number): Observable<Hero> {// Observable gère l'asynchrone par rapport au temps de fetch 
    this.messageService.add(`HeroService: fetched hero id=${id}`);// envoie le message en string au messager-service + l'id récupéré
    return of(HEROES.find(hero => hero.id === id));// partage les caractéristique du hero depuis mock-heroes correspondant à l'id 
  }
}