// import React, { Component } from 'react'

// export default class Demo4 extends Component {
//   render() {
//     var cars = ['tata','honda','audi','benz','bmw']
//     return (
//       cars.map((car,ind) => {
//         return <li>{car}</li>
//       })
//     )
//   }
// }




import React, { Component } from "react";

export default class ForceUpdateDemo2 extends Component {
  count = 0;
  render() {
    const increment = () => {
      this.count = this.count + 1;
      console.log(this.count);
    };
    return (
      <div>
        <p>The count is: {this.count}</p>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => this.forceUpdate()}>Refresh</button>
      </div>
    );
  }
}
