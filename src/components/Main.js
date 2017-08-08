import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>
            {<Link to="/"> <span role="img" aria-label="camera">📸</span> Redux Photo Gallery </Link>}
          </h2>
        </div>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    );
  }
}

export default App;
