import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/reducer";

export type RootStore = ReturnType<typeof reducers>;

export const store = createStore(reducers, {}, applyMiddleware(thunk));
