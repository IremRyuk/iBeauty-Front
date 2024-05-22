import { combineReducers } from "redux";
import {DarkTheme} from './Reducer/DarkTheme'
import { DefData } from "./Reducer/DefData";
import {Lang} from './Reducer/Lang'
import {Search} from './Reducer/Search'
export const AllReducers = combineReducers({
    theme:DarkTheme,
    lang:Lang,
    data:DefData,
    search:Search
})