import React from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      word: "",
      finale: []
    }
  }

 searchFunction = (event) => {
  this.setState({ word: event.target.value });
  this.setState({
    finale: [...this.state.things],
  });
 }


 render() {
   return (
     <div>
       <Input placeholder='Search Here' value={this.state.word} onChange={event => this.searchFunction(event)}/>
       <h3>Results:</h3>
       { this.state.word == "" ? 
          this.state.things.map(items => {
            return (
                <li>{items}</li>
            )
          }) :
          this.state.finale.filter(item => {
            if (item.includes(this.state.word)){
              return (
                  <li>{this.state.word}</li>
              )
            }

          })}
     </div>
   )
 }
}
 
export default SearchIndex;