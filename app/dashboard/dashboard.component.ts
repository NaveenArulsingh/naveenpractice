import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {HEROES} from '../mock-heroes';
import {Hero} from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes : Hero[] =[];
  constructor(private heroservice : HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() : void{
    this.heroes = this.heroservice.getHeroes().slice(1,5);
  }
}