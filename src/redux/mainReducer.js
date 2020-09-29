import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp28115937Reducer from '../features/SignUp28115937/redux/reducers'
import SignUp23115870Reducer from '../features/SignUp23115870/redux/reducers'
import CalendarView7115867Reducer from '../features/CalendarView7115867/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp28115937: SignUp28115937Reducer,
SignUp23115870: SignUp23115870Reducer,
CalendarView7115867: CalendarView7115867Reducer,

});