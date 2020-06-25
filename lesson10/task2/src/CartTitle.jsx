import React from 'react';

const CartTinte = ({userName, count}) => {
    return(
        <div className='cart-title'>
            {`${userName}, you added ${count} items`}
        </div>
    )
}

export default CartTinte;