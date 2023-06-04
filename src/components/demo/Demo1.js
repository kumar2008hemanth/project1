// import React from 'react'

// class Demo1 extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div>Iam an Element!</div>
//         <button>Iam Another Element</button>
//       </React.Fragment>
//     )
//   }
// }

// export default Demo1

import React from 'react'

class Demo1 extends React.Component {
    render() {
        function formatName(user) {
            return user.firstName + ' ' + user.lastName;

        }
        let user = {
            lastName: 'G',
            firstName: 'Hemanth'

        };

        return (
            <div>
                
                <h2>My Full Name is : {formatName(user)}</h2>
            </div>
        )
    }
}
export default Demo1
