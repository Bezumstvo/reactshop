import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { datafiles, datacategories, dataproducts, datadepartments } from './data.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  datafiles,
  datacategories,
  dataproducts,
  datadepartments,
  alert
});

export default rootReducer;
