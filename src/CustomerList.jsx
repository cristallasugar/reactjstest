import React, { useState } from 'react'
import order from './order.json'
import male from './images/male2.png'
import female from './images/female2.png'
import CustomerListItem from './CustomerListItem.jsx'

const customers = order.customers

export default function CustomerList() {
    const [userId, setUserId] = useState(0)

    function handleSelectUser(id) {
        setUserId(id)
    }

    return <div>
        <h3>UserID: {userId}</h3>
        <button onClick={() => handleSelectUser(5)}>Select User</button>
        {customers.map(customer => {
            return <CustomerListItem key={customer.id} getCustomer={customer} buttonCustomer={handleSelectUser}></CustomerListItem>
            //การส่งค่า props จะตั้งชื่อว่าอะไรก็ได้ ในที่นี้ตั้งว่า getCustomer เป็นการส่งค่า props ไปอีก Component
        })}
    </div>
}
