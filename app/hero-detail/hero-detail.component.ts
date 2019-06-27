import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../hero.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroservie : HeroService,
    private location :Location
  ) { }
  @Input() hero :Hero;
  heroes : Hero  ;
  ngOnInit() {
    this.getHero();
  }

  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.hero = this.heroservie.getHero(id);
  }

  goBack():void
  {
    this.location.back();
  }

}