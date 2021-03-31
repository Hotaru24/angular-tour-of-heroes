import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;// le @Input créer un pont entre les données quand le composant est applé dans le parent
  
  constructor() { }

  ngOnInit(): void {
  }
 

}
