import * as React from 'react';
import {Link} from 'react-router'
export class SecondPage extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <div><Link to="/firstpage">返回</Link></div>
      </div>
    );
  }
}