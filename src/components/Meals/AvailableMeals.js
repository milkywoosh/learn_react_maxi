import React from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../../UI/Card';

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
        return (
            <MealItem
                key={data.id}
                name={data.name}
                price={data.price}
                description={data.description}
            />
        )
    })

    return (
        <section className={classes.meals}>
            <Card className={classes.container}>
                <ul>{mealList}</ul>
            </Card>
        </section>
    )
}
export default AvailableMeals;