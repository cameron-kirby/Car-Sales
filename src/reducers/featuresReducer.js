// Import Actions
import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/featuresActions";

// Intial State
const initialState = {
  additionalPrice: 0,
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ],
  features: []
};

// Reducer
export const featuresReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      const addState = {...state}
      addState.additionalFeatures.filter((feature, index) => {
        if(feature.id !== parseInt(action.payload)){
          return feature
        } else {
          addState.features.push(feature)
          addState.additionalPrice = state.additionalPrice + feature.price
          addState.additionalFeatures.splice(index, 1)
        }
      });
      return addState
    case REMOVE_FEATURE:
      const removeState = {...state}
      removeState.features.filter((feature, index) => {
        if(feature.id !== parseInt(action.payload)){
          return feature
        } else {
          removeState.additionalFeatures.push(feature)
          removeState.additionalPrice = state.additionalPrice - feature.price
          removeState.features.splice(index, 1)
        }
      });
      return removeState;
    default:
      return state;
  }
};