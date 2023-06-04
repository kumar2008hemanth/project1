import React, {Component} from 'react'
import propTypes from "prop-types"
import { Children } from 'react';

export default function Greet({name,msg,age,Children}) {
  return (
    <div>
        Hello {name} {msg} , you r {age} years old.
        <br />
        {Children}
    </div>
  )
}
Greet.propTypes = {
    name:propTypes.string.isRequired,
    msg:propTypes.string,
    age:propTypes.number,
}; 


// import React, { Component } from 'react'
// export default class Greet extends Component {
//     render() {
//         let { name, msg, age } = this.props; // de structuring
//         return (
//             <div>
//                 Hello {name} {msg} , you r {age} years old
//             </div>
//         )
//     }
// }
