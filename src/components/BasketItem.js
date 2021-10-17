import React from 'react'

function BasketItem({item,product}) {
    return (
        <>
        <li class="prolar">
            {product.title} x {item.amount}
        </li>
        <style jsx>
            {`
            
            .prolar{
                padding:5px;
                font-weight:900;   
            }
            `}
        </style>
        </>
    )
}

export default BasketItem
