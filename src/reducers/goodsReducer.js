import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const SET_GOODS = 'SET_GOODS';
const SET_TOTAL_AMOUNT = 'SET_TOTAL_AMOUNT';
const SET_TOTAL_COST = 'SET_TOTAL_COST';
const SET_SELECTED_GOODS = 'SET_SELECTED_GOODS';
const SET_CURRENT_SECTION = 'SET_CURRENT_SECTION';

const defaultState = {
  goods: [],
  totalAmount: 0,
  totalCost: 0,
  selectedGoods: {},
  currentSection: []
};

function goodsReducer (state = defaultState, action) {
  switch(action.type) {
    case SET_GOODS: return { ...state, goods: action.payload }
    case SET_TOTAL_AMOUNT: return { ...state, totalAmount: action.payload }
    case SET_TOTAL_COST: return { ...state, totalCost: action.payload }
    case SET_SELECTED_GOODS: return { ...state, selectedGoods: action.payload }
    case SET_CURRENT_SECTION: return { ...state, currentSection: [action.payload] }
    default:
      return state;
  }
}

export const setGoods = (goods) => ({ type: SET_GOODS, payload: goods });
export const setTotalAmount = (amount) => ({ type: SET_TOTAL_AMOUNT, payload: amount });
export const setTotalCost = (cost) => ({ type: SET_TOTAL_COST, payload: cost });
export const setSelectedGoods = (goods) => ({ type: SET_SELECTED_GOODS, payload: goods });
export const setCurrentSection = (section) => ({ type: SET_CURRENT_SECTION, payload: section });


export const store = createStore(goodsReducer, composeWithDevTools(applyMiddleware(thunk)));