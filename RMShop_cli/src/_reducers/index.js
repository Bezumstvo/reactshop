import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { setIdsReducer, datapage, datatable, idsState } from './setIds.reducer';

const rootReducer = combineReducers({
  authentication,
  setIdsReducer,
  idsState,
  users,
  datapage,
  datatable,
  alert
});

export default rootReducer;
