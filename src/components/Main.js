import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'normalize.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>
            {<Link to="/">WonderList</Link>}
          </h2>
        </div>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    );
  }
}

export default App;
