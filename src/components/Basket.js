import React from 'react'
import BasketItem from './BasketItem'

function Basket({ basket, products, total, resetBasket }) {
    return (
        <>
            <div className="basket-container container">
                <h3> Sepetteki Ürünler</h3>
            <ul>
            {basket.map(item => (
                    <BasketItem item={item} product={products.find(p => p.id === item.id)} />
                )
                )
                }
            </ul>
                <div class="total">
                    Toplam: $ {total}
                </div>
                <button className="reset" onClick={resetBasket}> Sepeti Sıfırla </button>
            </div>

                <style jsx>{
                    `.basket-container ul{
                        list-style-type: none;
                        margin: 10px 0px;
                    }
                    .basket-container{

                        padding:20px;
                        background: #FAFAFC;
                        border:1px solid grey;
                        margin-bottom:30px;
                    }
                    .total{
                        text-align:right;
                        font-size:21px;
                        font-weight:bold;
                        color:limegreen;
                        border-top:1px solid grey;
                        padding:15px;

                    }
                    .reset{
                        background:lightcyan;
                        padding: 5px 15px;
                        font-size:17px;
                        font-weight:bold;
                        border-radius :5px;
                        cursor:pointer;

                    }
                    `
                }
                    </style>
        </>
    )
}

export default Basket
