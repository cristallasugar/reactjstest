import React from 'react'
import users from './users.json'

export default function UserList() {
    return <div>
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
    {/* <pre>{JSON.stringify(users)}</pre> */}
}

// Class UserList extends React.Component {
//     return <div>
//         <p>Hooks Hello World</p>
//     </div>
// }

// export default UserList
