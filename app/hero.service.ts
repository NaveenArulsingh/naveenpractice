import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {MessageService} from './message.service';


@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes() : Hero[]
  {
    this.messageService.add('HeroService: fetched heroes');
    return (HEROES);
  }
  constructor(private messageService :MessageService ) { }

}