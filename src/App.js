import React from 'react';
import { connect } from "react-redux";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

//Actions
import { addFeature, removeFeature } from "./actions/featuresActions";

const App = (props) => {
  const state = {
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    }
  };

  console.log(props)
  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures features={props.features} removeFeature={props.removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={props.addFeature}/>
        <Total car={state.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    additionalFeatures: state.featuresReducer.additionalFeatures,
    additionalPrice: state.featuresReducer.additionalPrice,
    features: state.featuresReducer.features,
  };
};

export default connect(
  mapStateToProps,
  { addFeature, removeFeature }
)(App);
