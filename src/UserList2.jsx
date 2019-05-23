import React, { useState } from 'react'
import axios from 'axios'
import { testNameToKey } from 'jest-snapshot/build/utils';

export default function UserList() {
    const [users, setUsers] = useState([])
    const [u, setU] = useState({})//{} = Object

    // function handleSetUsers() {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(res => {
    //             setUsers(res.data)
    //         })
    //     console.log("OK")
    // }

    async function handleSetUsers() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
    }

    function handleChange(e) {
        console.log(e.target.value)
        setU({
            name: e.target.value
        })
    }

    function handleAddUser() {
        console.log('add user')
        const newUsers = [...users, u]//... หมายถึง ไป clone ข้อมูลทุกอย่างมา จาก ตัวแปร array users
        setUsers(newUsers)
    }

    return <div>
        <input type="text" name="name" className="input" placeholder="Fill your name" onChange={handleChange}></input>
        <pre>{JSON.stringify(u)}</pre>
        <button className="button is-success" onClick={handleAddUser}>Add User</button>
        <span id="test"></span>

        <button className="button is-danger" onClick={handleSetUsers}>Get User</button>
        <table border="1">
            <thead>
                <tr>
                    <th width="100">ID</th>
                    <th width="200">Name</th>
                    <th width="150">Username</th>
                    <th width="200">Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => {
                    return <tr key={user.id}>
                        <th>{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>

    // return <div>
    //     {users.map(user => {
    //         return <div key={user.id}>
    //         <p>
    //             {user.name + " (" + user.email + ")"}&nbsp;<button>Delete {user.id}</button>
    //         </p>
    //         </div>
    //     })}
    // </div>
    {/* <pre>{JSON.stringify(users)}</pre> */ }
}

// Class UserList extends React.Component {
//     return <div>
//         <p>Hooks Hello World</p>
//     </div>
// }

// export default UserList
