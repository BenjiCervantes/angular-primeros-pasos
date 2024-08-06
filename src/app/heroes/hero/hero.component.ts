import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

changeName(){
  this.name = 'Ironman'
}

changeAge(){
  this.age = 45;
}

changeHero():void{
this.name = 'Thor'
}

changeAge2():void{
  this.age = 2000
}

resetForm(): void{
  this.name = 'Ironman';
  this.age = 45;
  // document.querySelectorAll('h1')!.forEach(element => {
  //   element.innerHTML= '<h1>Desde Angular</h1>';
  // });
}
}
