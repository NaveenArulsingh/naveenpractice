import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 // hero : Hero = { id : 1 , name : 'windstorm'};
 // heroes = HEROES; 
  heroes : Hero[];
  
    getHeroes() : void
    {
        this.heroes = this.heroservice.getHeroes();
    }
  
  constructor(private heroservice : HeroService) { }

  ngOnInit() {
   this.getHeroes();
  }

}