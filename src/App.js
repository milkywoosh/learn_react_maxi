import React, { useState } from "react";
import './App.css';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart'

function App(props) {
    const [modalShow, setModalShow] = useState(false);
    const ModalShowHandler = () => {
        setModalShow(true)
    }
    const ModalDropHandler = () => {
        setModalShow(false)
    }

    return (
        < >
            <Header showCart={ModalShowHandler} />

            <Cart
                onCloseEscKey={ModalDropHandler}
                onDropOutsideWin={ModalDropHandler}
                showUp={modalShow}
                dropModal={ModalDropHandler}
            />


            <main>
                <Meals />
            </main>
        </>


    )
}

export default App;