import React from 'react';
import classes from './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients) // creates an array of each key (ingredient)
        .map(igKey => {  // maps over that array for each ingredient
            return [...Array(props.ingredients[igKey])].map((_, i) => {  // creates an empty array with a length set to the value of the key (ingredient)
                return <BurgerIngredients key={igKey + i} type={igKey} /> // returns the jsx code into the created array
            })
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, [])

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
};

export default burger;