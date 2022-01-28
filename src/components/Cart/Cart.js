import React from 'react';
import Modal from '../../UI/Modal';
const TmpData = [
    {
        id: 'c1',
        name: 'Sushi',
        amount: 2,
        price: 12.99,
    }
]
function Cart(props) {
    const cartItems = TmpData.map((data) => {
        return(<ul key={data.id}>
            <li>{data.name}</li>
        </ul>)
    })

    if (props.showUp === false) {
        return null;
    }

    return (
        <Modal onClick={props.onStopPropa}>
            
            {cartItems}
            <div className={'#'}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={'#'} >
                <button onClick={props.showModal}>Close</button>
                <button className={'#'}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart;