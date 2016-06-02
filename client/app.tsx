import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

import {Hello} from './components/hello.tsx';

class App extends React.Component<{}, {}>{
  render(){
    return (
      <div>
        <h1>Template App</h1>
        <Hello/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));
