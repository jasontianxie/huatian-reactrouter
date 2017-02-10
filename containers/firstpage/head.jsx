
import { connect } from 'react-redux';//redux(使用 react-redux)
import { Provider } from 'react-redux';//redux(使用 react-redux)
import * as React from 'react';//注意：如果该组件用到了React变量，则组件中要引入React，否则报错。from后面的路径，可以直接写模块名，则默认会自动查找node_modules中的相关模块，如果不是直接写的模块名，则要写成相对路径或者绝对路径。相对路径本文件夹用./表示。上一级文件夹用../表示
class Head extends React.Component {
  constructor(props) {
    super(props);
  }
  
render(){
  return (<div className="myhead">
     <span onClick={() => { this.props.dispatch1({ type: "CHANGE_SELECT", payload: "all" }) }} className={this.props.state1.selectAll ? "checked" : "unchecked"}>全选</span>{/*使用redux,并且使用react-redux时使用的方法*/}
    <span onClick={() => { this.props.dispatch1({ type: "CHANGE_DELETE", payload: "delete" }) }} className={this.props.state1.deleteThis ? "checked" : "unchecked"}>删除</span>
  </div>);
  
}
}

function mapStateToProps(state) {//redux(使用 react-redux)
      return {
          state1: state
          }
        }
  function mapDispatchToProps(dispatch) {//redux(使用 react-redux)
      return {
        dispatch1: dispatch
      }
    }

export const Headwrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(Head);