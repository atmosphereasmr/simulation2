import axios from 'axios'

const initialState = {
  username: '',
  password: '',
  name: '',
  description: '',
  address: '',
  city: '',
  state: '',
  zip: 0,
  image_url: '',
  loan_amount: 0,
  monthly_amount: 0,
  desired_rent: 0,
  user_id: ''
}

const PAGE_SELECTED1 = "PAGE_SELECTED1";
const PAGE_SELECTED2 = "PAGE_SELECTED2";
const PAGE_SELECTED3 = "PAGE_SELECTED3";
const PAGE_SELECTED4 = "PAGE_SELECTED4";
const PAGE_SELECTED5 = "PAGE_SELECTED5";
const LOGIN = "LOGIN";
const PASSWORD = "PASSWORD"
const DESIRE = "DESIRE"
const PROPERTY_NAME = "PROPERTY_NAME"
const PROPERTY_DESC = "PROPERTY_DESC"
const PROPERTY_ADDRESS = "PROPERTY_ADDRESS"
const PROPERTY_CITY = "PROPERTY_CITY"
const PROPERTY_STATE = "PROPERTY_STATE"
const PROPERTY_ZIP = "PROPERTY_ZIP"
const PROPERTY_IMAGE_URL = "PROPERTY_IMAGE_URL"
const PROPERTY_LOAN_AMOUNT = "PROPERTY_LOAN_AMOUNT"
const PROPERTY_MONTHLY_AMOUNT = "PROPERTY_MONTHLY_AMOUNT"
const PROPERTY_DESIRED_RENT = "PROPERTY_DESIRED_RENT"

function reducer( state = initialState, action){
  switch(action.type) {
    case PAGE_SELECTED1:
      let { page1 } = action
      return { ...state, onPage: 1}
    case PAGE_SELECTED2:
      let { page2 } = action
      return { ...state, onPage: 2}
    case PAGE_SELECTED3:
      let { page3 } = action
      return { ...state, onPage: 3}
    case PAGE_SELECTED4:
      let { page4 } = action
      return { ...state, onPage: 4}
    case PAGE_SELECTED5:
      let { page5 } = action
      return { ...state, onPage: 5}
    case LOGIN:
      let {home} = action
      return {...state, username: action.payload}
    case PASSWORD:
      let {pass} = action
      return {...state, password: action.payload}
    case DESIRE:
      let {desire} = action
      return {...state, desired_rent: action.payload}
    case PROPERTY_NAME:
      let {propertyName} = action
      return {...state, name: action.payload}
    case PROPERTY_DESC:
      let {propertyDesc} = action
      return {...state, description: action.payload}
    case PROPERTY_ADDRESS:
      let {propertyAddress} = action
      return {...state, address: action.payload}
    case PROPERTY_STATE:
      let {propertyState} = action
      return {...state, state: action.payload}
    case PROPERTY_CITY:
      let {propertyCity} = action
      return {...state, city: action.payload}
    case PROPERTY_ZIP:
      let {propertyZip} = action
      return {...state, zip: action.payload}
    case PROPERTY_IMAGE_URL:
      let {propertyImageURL} = action
      return {...state, image_url: action.payload}
    case PROPERTY_LOAN_AMOUNT:
      let {propertyLoanAmount} = action
      return {...state, loan_amount: action.payload}
    case PROPERTY_MONTHLY_AMOUNT:
      let {propertyMonthlyAmount} = action
      return {...state, monthly_amount: action.payload}
    case PROPERTY_DESIRED_RENT:
      let {propertyDesiredRent} = action
      return {...state, desired_rent: action.payload}
    default: return state;}

}

export function login(username) {
  return {
    type: LOGIN,
    payload: username
  }
}

export function password(password) {
  return {
    type: PASSWORD,
    payload: password
  }
}

export function desire(desire) {
  return {
    type: DESIRE,
    payload: desire
  }
}

export function propertyName(propertyName) {
  return {
    type: PROPERTY_NAME,
    payload: propertyName
  }
}

export function propertyDesc(propertyDesc) {
  return {
    type: PROPERTY_DESC,
    payload: propertyDesc
  }
}

export function propertyAddress(propertyAddress) {
  return {
    type: PROPERTY_ADDRESS,
    payload: propertyAddress
  }
}

export function propertyCity(propertyCity) {
  return {
    type: PROPERTY_CITY,
    payload: propertyCity
  }
}

export function propertyState(propertyState) {
  return {
    type: PROPERTY_STATE,
    payload: propertyState
  }
}

export function propertyZip(propertyZip) {
  return {
    type: PROPERTY_ZIP,
    payload: propertyZip
  }
}

export function propertyLoanAmount(propertyLoanAmount) {
  return {
    type: PROPERTY_LOAN_AMOUNT,
    payload: propertyLoanAmount
  }
}

export function propertyMonthlyAmount(propertyMonthlyAmount) {
  return {
    type: PROPERTY_MONTHLY_AMOUNT,
    payload: propertyMonthlyAmount
  }
}

export function propertyImageURL(propertyImageURL) {
  return {
    type: PROPERTY_IMAGE_URL,
    payload: propertyImageURL
  }
}

export function propertyDesiredRent(propertyDesiredRent) {
  return {
    type: PROPERTY_DESIRED_RENT,
    payload: propertyDesiredRent
  }
}

export function selectPage1(page1) {
  return {
    type: PAGE_SELECTED1,
    page1
  }
}

export function selectPage2(page2) {
  return {
    type: PAGE_SELECTED2,
    page2
  }
}

export function selectPage3(page3) {
  return {
    type: PAGE_SELECTED3,
    page3
  }
}

export function selectPage4(page4) {
  return {
    type: PAGE_SELECTED4,
    page4
  }
}

export function selectPage5(page5) {
  return {
    type: PAGE_SELECTED5,
  }
}

export default reducer;
