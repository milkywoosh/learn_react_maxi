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
function Cart() {
    const cartItems = TmpData.map((data) => {
        <ul>
            <li>{data.name}</li>
        </ul>
    })

    return (
        <Modal>
            {cartItems}
            <div className={'#'}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={'#'}>
                <button ÎclassName={'#'}>Close</button>
                <button className={'#'}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart;