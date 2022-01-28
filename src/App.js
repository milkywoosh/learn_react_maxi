import React from "react";
import './App.css';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart'

function App(props) {


    return (
        <>
            <Header />
            <Cart />
            <main>
                <Meals />
            </main>
        </>


    )
}

export default App;