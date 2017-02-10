import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import {FirstPage} from './firstpage/index';
import {SecondPage} from './secondpage/index';


require('./index.scss');//要进行分离的css文件


const reducer = (state = { selectAll: false, deleteThis: false }, action) => {
  switch (action.type) {
    case "CHANGE_SELECT":
      return Object.assign({}, state,{selectAll:!state.selectAll});
      // break;
    case "CHANGE_DELETE":
      return Object.assign({}, state,{deleteThis:!state.deleteThis});
      // break;
    default:
      return state;
      // break;
  }
}
const store = createStore(reducer);
const routes=(
  <Route path="/" component={FirstPage}>
  <Route path="/firstpage" component={FirstPage}/>
  <Route path="/secondpage" component={SecondPage}/>
  </Route>
);
class Wrap extends React.Component {
  constructor() {
        super();
    }
  render() {
    return (<div>
      <Router history={hashHistory}>
        <Route path="/firstpage" component={FirstPage}/>
        <Route path="/secondpage" component={SecondPage}/>
      </Router>
    </div>);
  }
}
ReactDOM.render(
  (<Provider store={store}>
    <Wrap/>
  </Provider>),
    document.getElementById('container')
  );