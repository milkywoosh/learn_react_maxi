import React from 'react';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },]

function AvailableMeals() {
    const mealList = DUMMY_MEALS.map((data) => {
        return <li>{data.name}</li>
    }
    )

    return (
        <section className={classes.meals}>
            <ul>{mealList}</ul>
        </section>
    )
}
export default AvailableMeals;