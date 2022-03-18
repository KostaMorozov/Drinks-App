import {
  SET_DRINKS,
  SET_SEARCHED_DRINK,
  SET_RANDOM_DRINK,
  SET_CURRENT_DRINK,
  SET_SORTING_ORDER,
} from "./ActionTypes";
import { IDrink } from "./../reducers/DrinksReducer";

interface SetDrinks {
  type: typeof SET_DRINKS;
  payload: IDrink[];
}
interface SetSearchedDrink {
  type: typeof SET_SEARCHED_DRINK;
  payload: "";
}
interface SetRandomDrink {
  type: typeof SET_RANDOM_DRINK;
  payload: {};
}
interface SetCurrentDrink {
  type: typeof SET_CURRENT_DRINK;
  payload: "";
}
interface SetSortingOrder {
  type: typeof SET_SORTING_ORDER;
  payload: "";
}

export type Action =
  | SetDrinks
  | SetSearchedDrink
  | SetRandomDrink
  | SetCurrentDrink
  | SetSortingOrder;
