// import React, { Component } from 'react'

// export default class Demo3 extends Component {
//   render() {
//     let x = 5;
//     return (
//       <h1>{x % 2 == 0 ? `${x} is Even` : `${x} is odd`}</h1>
//     )
//   }
// }


// import React from 'react'

// export default function Demo3() {

//     let unreadMessages = [];
//     return (
//         <div>
//             {unreadMessages.length > 0 && (
//                 <h2>You have {unreadMessages.length} unread messages.</h2>
//             )}
//         </div>
//     );
// }

import React from "react";

export default function ConditionalDemo2() {
  const dayNumber = new Date().getDay();
  switch (dayNumber) {
    case 1:
      return <h3>Today is Monday-{dayNumber}</h3>;
    case 2:
      return <h3>Today is Tuesday-{dayNumber}</h3>;
    case 3:
      return <h3>Today is Wednesday-{dayNumber}</h3>;
    case 4:
      return <h3>Today is Thursday-{dayNumber}</h3>;
    case 5:
      return <h3>Today is Friday-{dayNumber}</h3>;
    case 6:
      return <h3>Today is Saturday-{dayNumber}</h3>;
    case 7:
      return <h3>Today is Sunday-{dayNumber}</h3>;
    default:
      return <h3>Not a Valid number</h3>;
  }
}

