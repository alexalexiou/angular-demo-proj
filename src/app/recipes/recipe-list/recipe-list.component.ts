import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://ucarecdn.com/6b3c5605-69ac-4ea3-b07f-18eca985f5a6/-/resize/700/'),
    new Recipe('A 2 Recipe', 'This is 2 test', 'https://ucarecdn.com/6b3c5605-69ac-4ea3-b07f-18eca985f5a6/-/resize/700/'),
    new Recipe('A 3  Recipe', 'This is 3 test', 'https://ucarecdn.com/6b3c5605-69ac-4ea3-b07f-18eca985f5a6/-/resize/700/'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
