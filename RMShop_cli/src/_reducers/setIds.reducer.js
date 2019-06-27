import { routeConstants } from '../_constants';
export const idsState = {
  c: 0, o: 0, g: 0, b:0, oName:''  // с - calculate  o - owner g - ground b - building Переменные для перемещения по страницам сайта
}           // o_name - для хлебных крошек
//Функция для сохранения выбранных параметров пользователя (текущий расчет, правообладатель, земельный участок и здание)
export function setIdsReducer(state = idsState, action) {
  switch (action.type) {
    case 'SET_CALCS':
    const c = action.payload;
      return { ...state,  c: action.payload }
    case 'SET_OWNER':
      return { ...state, o: action.payload }
    case 'SET_OWNER_NAME':
      return { ...state, oName: action.payload }
    case 'SET_GROUND':
      return { ...state, g: action.payload }
    case 'SET_BUILD':
      return { ...state, b: action.payload }
  default:
    return state
  }
}
// Функция куда получаем инофрмацию о параметрах из БД datapage - об одном текущем объекте
// datatable о всех дочерних объектах
export function datapage (state = {}, action) {
  switch (action.type) {
    case routeConstants.GET_PAGE_REQUEST:
      return {
        loading: true
      };
    case routeConstants.GET_PAGE_SUCCESS:
      return {
        items: action.datapage
      };
    case routeConstants.GET_PAGE_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
export function datatable (state = {}, action) {
  switch (action.type) {
    case routeConstants.GET_TABLE_REQUEST:
      return {
        loading: true
      };
    case routeConstants.GET_TABLE_SUCCESS:
      return {
        items: action.datatable
      };
    case routeConstants.GET_TABLE_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
