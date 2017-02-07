// var Head=React.CreateClass({
//   getInitialState:function(){
//     return {
//       selectAll:false,
//       deleteThis:false
//     };
//   },
//   handleClickAll:function(){
//     selectAll=!selectAll;
//   },
//   handleClickDelete:function(){
//     deleteThis=!deleteThis;
//   },
//   render:function() {
//     return (<div class="myhead">
//     <span onClick={this.handleClickAll} class={selectAll?"checked":"unchecked"}>全选</span>
//     <span onClick={this.handleClickDelete} class={deleteThis?"checked":"unchecked"}>删除</span>
//     </div>);
//   }
// });
import * as React from 'react';//注意：如果该组件用到了React变量，则组件中要引入React，否则报错。from后面的路径，可以直接写模块名，则默认会自动查找node_modules中的相关模块，如果不是直接写的模块名，则要写成相对路径或者绝对路径。相对路径本文件夹用./表示。上一级文件夹用../表示
export class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAll: false,
      deleteThis: false
    };
  }//用redux后，状态都写在了store中，这里就不用state了。
  handleClickAll(){//没有用redux时使用的方法
    // this.state.selectAll=!this.state.selectAll;//不能用这种方法，要用下面的setState来更改状态
    this.setState(Object.assign({},this.state,{selectAll:!this.state.selectAll}));
    console.log('clickAll:'+this.state.selectAll);
  }
  handleClickDelete(){//没有用redux时使用的方法
    // this.state.deleteThis=!this.state.deleteThis;
    this.setState(Object.assign({},this.state,{deleteThis:!this.state.deleteThis}));
    console.log('clickdelete:'+this.state.deleteThis);
  }
  render(){
    console.log(this.props.state+"aaaa");
    return (<div className="myhead">
   {/* <span onClick={()=>{this.handleClickAll()}} className={this.state.selectAll?"checked":"unchecked"}>全选</span>*/}{/*这里的绑定用箭头函数()=>{this.handleClickAll()}，而用this.handleClickAll.bind(this),提示bind is undefined？？？后来全都换成箭头函数，就不出错，然后又全都换成bind又都正常，不报错了。诡异！*/}
   {/* <span onClick={this.handleClickDelete.bind(this)} className={this.state.deleteThis?"checked":"unchecked"}>删除</span> 没使用redux时使用的方法*/}
    <span onClick={()=>{this.props.dispatch({type:"CHANGE_SELECT",payload:"all"})}} className={this.props.state.selectAll?"checked":"unchecked"}>全选</span>
    <span onClick={()=>{this.props.dispatch({type:"CHANGE_DELETE",payload:"delete"})}} className={this.props.state.deleteThis?"checked":"unchecked"}>删除</span>
    </div>);
  }
}