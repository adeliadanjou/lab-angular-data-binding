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
  newFood: any = {};
  todaysFoods: Array<any> = []

  constructor() {};

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

  addTodaysFood(food,quantity){

    food.quantity = quantity.value

  //   console.log(food)
  //  this.todaysFoods.push(food)
   if(this.todaysFoods.indexOf(food) === -1){
     this.todaysFoods.push(food)
   }
   else {
     this.todaysFoods[this.todaysFoods.indexOf(food)].quantity = quantity.value 
   }

  }

}
