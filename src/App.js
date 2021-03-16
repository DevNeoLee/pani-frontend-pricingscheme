import React, { useEffect, useReducer } from 'react';
import Features from './features';
import Summary from './summary';
import './App.css';

export const PurchaseContext = React.createContext();

const initialState = {
  loading: true,
  error: '',
  features: {},
  toggleShow: false,
  total: 0,
  purchases: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { 
        ...state,
        loading: false,
        error: '',
        features: action.payload
      }
    case 'FETCH_ERROR':
      return { 
        ...state,
        loading: false,
        error:  action.payload,
        features: {}
      }
    case 'SELECT':
      return {
        ...state,
        purchases: [...state.purchases, action.payload ],
        total: state.purchases.map(purchase => purchase.price).reduce((price, sum) => price + sum, 0) + action.payload.price
      }
    case 'UNSELECT':
      return {
        ...state,
        purchases: state.purchases.filter((purchase)=> action.payload.id !== purchase.id),
        total: state.purchases.map(purchase => purchase.price).reduce((price, sum) => price + sum, 0) - action.payload.price
      }
    default: 
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    fetch('https://polar-cove-07920.herokuapp.com/api/v1/categories')
    .then(res=> 
      res.json())
    .then(data=>
      dispatch({type: 'FETCH_SUCCESS', payload: data.features}))
    .catch(error=>
      dispatch({type: 'FETCH_ERROR', payload: error}));
  },[]);
    console.log(state.features)

    console.log(state)
  return(
    <PurchaseContext.Provider value={{ state: state, dispatch: dispatch }}>
      <div className="App">
        { state.loading 
        ? 
        "loading" 
        : 
        <div>
          {state.features.map(obj =>
            <Features key={obj.id} id={ obj.id} name={ obj.name } product={ obj.product } subcategories={ obj.subcategories } />)
          }
          <Summary />
        </div>
        }

        { state.error
        ? 
        <div>{state.error}</div>
        : 
        null 
        }
      </div>
    </PurchaseContext.Provider>
  );
}

