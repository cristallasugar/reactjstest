import React from 'react'
import HelloWorld from './HelloWorld.jsx'
import HooksHelloWorld from './HooksHelloWorld.jsx'
import Counter, { useState } from './Counter.jsx'
import UserList from './UserList.jsx'
import CustomerList from './CustomerList.jsx'
import UserList2 from './UserList2.jsx'
import Routes from './Routes'
import Navbar from './Navbar'
import 'bulma/css/bulma.min.css'

// class HelloWorld extends React.Component {
//     render() {
//         return <div>
//             <p>Hello World</p>
//         </div>
//     }
// }

class App extends React.Component {
    state = {
        counter: 1
    }

    render() {
        console.log('Test Value')
        return <div>
            {/* <p>Counter: {this.state.counter}</p> */}
            <HelloWorld></HelloWorld>
            <HooksHelloWorld></HooksHelloWorld>
            <Counter></Counter>
            <UserList></UserList>
            <CustomerList></CustomerList>
            <UserList2></UserList2>
            <Routes></Routes>
            <Navbar></Navbar>
        </div>
    }
}

export default App
