import { Sort } from "../../Utils/Utils";
import { Action } from "../actions/Actions";
import * as ActionType from "../actions/ActionTypes";

export interface IDrink {
  dateModified?: string;
  idDrink?: string;
  strCategory?: string;
  strDrink?: string;
  strGlass?: string;
  strIBA?: string;
  strInstructions?: string;
  strDrinkThumb?: string;
}

export interface IDrinksState {
  drinks: IDrink[];
  searchedDrink: string;
  randomDrink: IDrink;
  currentDrink: IDrink;
  sortingOrder: string;
  filterInput?: string;
  filterBy?: string;
}

export const initialState: IDrinksState = {
  drinks: [],
  searchedDrink: "",
  randomDrink: {},
  currentDrink: {},
  sortingOrder: Sort.DESCENDING,
  filterInput: "",
  filterBy: "",
};

const DrinksReducer = (
  state: IDrinksState = initialState,
  action: Action
): IDrinksState => {
  switch (action.type) {
    case ActionType.SET_DRINKS:
      return {
        ...state,
        drinks: action.payload,
      };
    case ActionType.SET_SEARCHED_DRINK:
      return {
        ...state,
        searchedDrink: action.payload,
      };
    case ActionType.SET_RANDOM_DRINK:
      return {
        ...state,
        randomDrink: action.payload,
      };
    case ActionType.SET_CURRENT_DRINK:
      return {
        ...state,
        currentDrink: state.drinks
          ? state.drinks.find((d) => d.idDrink === action.payload) ?? {}
          : {},
      };
    case ActionType.SET_SORTING_ORDER:
      return {
        ...state,
        sortingOrder:
          state.sortingOrder === Sort.ASCENDING
            ? Sort.DESCENDING
            : Sort.ASCENDING,
      };
    case ActionType.SET_FILTER_INPUT:
      return {
        ...state,
        filterInput: action.payload,
      };
    case ActionType.SET_FILTER_BY:
      return {
        ...state,
        filterBy: action.payload,
      };
    default:
      return state;
  }
};

export default DrinksReducer;
