import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor() { }

  ngOnInit(): void {
    this.recipes.push(new Recipe(
      'A test Recipe',
      'Test Description',
      'https://homepages.cae.wisc.edu/~ece533/images/airplane.png')
    );
  }

}
