import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Object[] = foods;
  foodSearch: string = "";
  isForm: boolean = false;
  newFood: any = {}
  constructor() { }

  ngOnInit() {
  }

  toggleForm = () => {
    return this.isForm = !this.isForm

  }

  addFood = (newFood) => {

    if(this.newFood.name !== undefined && this.newFood.calories !== undefined && this.newFood.image !== undefined  ) {
      this.foods.push(this.newFood);
      this.isForm = false;
    }
    else {
      console.log("Los campos no pueden estar vacios")
    }
   
  }

}
