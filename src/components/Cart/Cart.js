import React, { useEffect, useContext } from 'react';
// import Modal from '../../UI/Modal';
import OtherModal from '../../UI/OtherModal';
import CartContext from '../store/cart-context'
import classes from './Cart.module.css';
import CartItem from './CartItem';

function Cart(props) {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        // ---- IMPORTANT NOTE ----
        // this removeItem --> pass ID to cartCtx which 
        // will be received by removeItemFromCartHandler
        console.log("cek trial handler Ctx removeItem: ", id)
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }


    useEffect(() => {
        document.body.addEventListener('keydown', onCloseEscape)
        return () => {
            document.body.removeEventListener('keydown', onCloseEscape)
        }
    })
    const cartItems = (
        <ul className={classes.cartItems}>
            {cartCtx.items.map((item) =>
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            )}
        </ul>
    )

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
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.dropModal} className={classes['button--alt']}> Close </button>

                {hasItems && <button className={classes.button}>Order</button>}

            </div>
        </OtherModal >
        // </Modal>
    )
}
export default Cart;