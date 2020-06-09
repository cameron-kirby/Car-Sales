export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = featureId => {
    // action object
  return { type: ADD_FEATURE, payload: featureId };
};

export const removeFeature = featureId => {
  // action object
  return { type: REMOVE_FEATURE, payload: featureId };
};