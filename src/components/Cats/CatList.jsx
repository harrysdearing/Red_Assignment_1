import React from 'react';
 
const CatList = (props) => {
 return (
   <div>
     {props.cats.map((cat) => {  //this refers to the props object because we are working in a Class Component and want to refer to the props in this specific component
      return (
        <ul key={cat}>
          <li>{cat}</li>
        </ul>
      )
     })}
   </div>
 )
}
 
export default CatList;