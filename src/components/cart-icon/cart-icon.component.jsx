import React from 'react';

import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount}  from '../../redux/cart/cart.selectors';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'  ;

import './cart-icon.styles.scss';

const CartIcon=({toggleCartHidden,ItemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'></ShoppingIcon>
        <span className='item-count'> {ItemCount}</span> 
    </div>
);


const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});

const mapStateToProps = (state)=>({
    ItemCount:selectCartItemsCount(state)
})


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);