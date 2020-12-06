import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

import Header from './Header'

import MainForm from './MainForm'

import Cart from './Cart'


import FEATURES from './../STORE'

import './App.css';

class App extends Component {
  static defaultProps = {
    features: FEATURES
  }
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };


  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
    console.log(selected.Processor.name)
  };

  render() {
    return (
      <div className="App">
        <Header company='ELF Computing'/>
        <main>
          <MainForm features={this.props.features} data={this.state} update={this.updateFeature}/>
          <Cart data={this.state}/>
        </main>
      </div>
    );
  }
}

export default App;
