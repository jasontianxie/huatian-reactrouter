import * as React from 'react';
import {Content} from './content';
import {Headwrap} from './head';
// import {Bottom} from './bottom';

export class FirstPage extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <Headwrap/>
        <Content/>
      </div>
    );
  }
}