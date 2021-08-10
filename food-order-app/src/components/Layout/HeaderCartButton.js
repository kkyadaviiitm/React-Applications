import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    // to pull out items from items from cart context we
    // will use array destructuring to pull out from items.

    const { items } = cartCtx;


    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        // setTimeout is added because once we add item to cart state of bump become true and hence the cart will not bump again
        // to make it bump again we need to set it false after 300ms so that every time it added bump class will execute.
        
       const timer = setTimeout( () => {
            setBtnIsHighlighted(false);
        }, 300 );

        return () => {
            clearTimeout(timer);
        };
    }, [items]);  // if we just pass cartCtx as a dependency then it will
    //execute every time if anything changes in cart context

    return (
        <React.Fragment>
            <button className={btnClasses} onClick={props.onClick}>
                <span className={classes.icon}><CartIcon /></span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
        </React.Fragment>
    );

};

export default HeaderCartButton;