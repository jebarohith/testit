import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  addingHero = false;
  heroes: any = [];
  selectedHero!: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  cancel() {
    this.addingHero = false;
    this.selectedHero = {
      id: 0,
      name: '',
      saying: '',
    };
  }

  deleteHero(hero: Hero) {
    this.heroService.deleteHero(hero).subscribe((res) => {
      this.heroes = this.heroes.filter((h: Hero) => h !== hero);
      if (this.selectedHero === hero) {
        this.selectedHero = {
          id: 0,
          name: '',
          saying: '',
        };
      }
    });
  }

  getHeroes() {
    return this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  enableAddMode() {
    this.addingHero = true;
    this.selectedHero = new Hero();
  }

  onSelect(hero: Hero) {
    this.addingHero = false;
    this.selectedHero = hero;
  }

  save() {
    if (this.addingHero) {
      this.heroService.addHero(this.selectedHero).subscribe((hero) => {
        this.addingHero = false;
        this.selectedHero = {
          id: 0,
          name: '',
          saying: '',
        };
        this.heroes.push(hero);
      });
    } else {
      this.heroService.updateHero(this.selectedHero).subscribe((hero) => {
        this.addingHero = false;
        this.selectedHero = {
          id: 0,
          name: '',
          saying: '',
        };
      });
    }
  }
}
