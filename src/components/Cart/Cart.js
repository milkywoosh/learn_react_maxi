import React, { useEffect } from 'react';
// import Modal from '../../UI/Modal';
import OtherModal from '../../UI/OtherModal';
import classes from './Cart.module.css';
const TmpData = [
    {
        id: 'c1',
        name: 'Sushi',
        amount: 2,
        price: 12.99,
    }
]
function Cart(props) {

    useEffect(() => {
        document.body.addEventListener('keydown', onCloseEscape)
        return () => {
            document.body.removeEventListener('keydown', onCloseEscape)
        }
    })
    const cartItems = TmpData.map((data) => {
        return (<ul key={data.id}>
            <li>{data.name}</li>
        </ul>)
    })
    const onCloseEscape = (event) => {
        if ((event.charCode || event.keyCode) === 27) {
            props.onCloseEscKey()
        }
    }

    if (props.showUp === false) {
        return null;
    }


    return (
        // <Modal onClick={props.onDropOutsideWin}>
        <OtherModal onClick={props.onDropOutsideWin}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.dropModal} className={classes['button--alt']}> Close </button>

                <button className={classes.button}>Order</button>

            </div>
        </OtherModal >
        // </Modal>
    )
}
export default Cart;