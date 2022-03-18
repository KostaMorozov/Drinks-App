import { Dispatch } from "redux";
import * as ActionType from "./ActionTypes";
import api from "../../api/api";
import { IDrink } from "./../reducers/DrinksReducer";

export const setDrinks = (drink: string) => async (dispatch: Dispatch) => {
  try {
    const response = await api.get("/search.php?s=" + drink);
    const { data } = response;
    dispatch({ type: ActionType.SET_DRINKS, payload: data.drinks });
  } catch (error) {
    alert("Something went wrong, please try again later...");
  }
};

export const setSearchedDrink = (drinkId: string) => {
  return { type: ActionType.SET_SEARCHED_DRINK, payload: drinkId };
};

export const setRandomDrink = () => async (dispatch: Dispatch) => {
  try {
    const response = await api.get("/random.php");
    const { data } = response;
    dispatch({ type: ActionType.SET_RANDOM_DRINK, payload: data.drinks[0] });
  } catch (error) {
    alert("Something went wrong, please try again later...");
  }
};

export const setCurrentDrink = (drinkId: string) => {
  return { type: ActionType.SET_CURRENT_DRINK, payload: drinkId };
};

export const setSortingOrder = (sortingOrder: string) => {
  return { type: ActionType.SET_SORTING_ORDER, payload: sortingOrder };
};

export const setSortedDrinks = (drinks: IDrink[]) => {
  return { type: ActionType.SET_DRINKS, payload: drinks };
};

export const setFilteredDrinks = (drinks: IDrink[]) => {
  return { type: ActionType.SET_DRINKS, payload: drinks };
};
