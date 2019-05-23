import React from 'react'
import male from './images/male2.png'
import female from './images/female2.png'

export default function CustomerListItem(props) {
    const customer = props.getCustomer
    const gender = customer.gender ? male : female

    return <div>
        <img src={customer.gender == 'M' ? male : female} alt="" />
        <img src={gender} alt="" />
        <button onClick={() => props.buttonCustomer(customer.id)}>Select User {customer.id}</button>
    </div>
}
