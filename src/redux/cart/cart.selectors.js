import {createSelector} from 'reselect';

const selectCart=state=>state.cart;

 export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
 );

 export const SelectCartHidden =createSelector(
    [selectCart],
    cart=>cart.hidden
)

 export const selectCartItemsCount=createSelector(
     [selectCartItems],
     cartItems=>
     cartItems.reduce( (accumulatedQuanitity,cartItem)=>
        accumulatedQuanitity+cartItem.quantity
    ,0 )

 );
 export const selectCartTotal=createSelector(
    [selectCartItems],
    cartItems=>
    cartItems.reduce( (accumulatedQuanitity,cartItem)=>
       accumulatedQuanitity+cartItem.quantity*cartItem.price
   ,0 )
 );