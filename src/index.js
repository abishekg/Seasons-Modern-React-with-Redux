import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import { Spinner } from './Spinner';

class App extends Component {

  state = {
    lat: '',
    errorMessage: ''
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    )
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div><SeasonDisplay lat={this.state.lat} /></div>
    }
    return (
      <Spinner message="Please accept location request" />
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));