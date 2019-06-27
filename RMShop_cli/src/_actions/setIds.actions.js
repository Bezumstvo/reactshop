import { routeConstants } from '../_constants';

export const setIdsActions = {
    setCalc,
    setOwn,
    setOwnName,
    setGround,
    setBuild,
};
function setCalc(val) {
    return {
      type: routeConstants.SET_CALCS,
      payload: val,
     };
}

function setOwn(val) {
    return {
      type: routeConstants.SET_OWNER,
      payload: val,
     };
}
function setOwnName(val) {
    return {
      type: routeConstants.SET_OWNER_NAME,
      payload: val,
     };
}
function setGround(val) {
    return {
      type: routeConstants.SET_GROUND,
      payload: val,
     };
}
function setBuild(val) {
    return {
      type: routeConstants.SET_BUILD,
      payload: val,
     };
}
