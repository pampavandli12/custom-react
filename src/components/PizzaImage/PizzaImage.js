import React from 'react';
import classes from './PizzaImage.css';
import pizzaimage from '../../assets/pizza.jpg';

const PizzaImage = (props) => {
  return (
    <div className={classes.PizzaContainer}>
      <img src={pizzaimage} className={classes.PizzaImage} />
    </div>
  );
};

export default PizzaImage;
