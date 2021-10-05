import { combineReducers } from "redux";
import cardItem  from "./Reducer";
import {apiData, hackerNewsData, imagesData} from "./Reducer"

export default combineReducers({
    cardItem,
    apiData,
    hackerNewsData,
    imagesData
})