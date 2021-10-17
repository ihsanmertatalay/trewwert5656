import React from 'react'

function Product({ product, basket, setBasket, total, money }) {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        if (checkBasket) {
            checkBasket.amount += 1;
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }
    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const emptyBasket = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1;
        if (currentBasket.amount === 0) { setBasket([...emptyBasket]) }
        else {
            setBasket([...basket.filter(item => item.id !== product.id), currentBasket])
        }
    }
    return (
        <>
                    {product.id < 5 &&  

        <div className="product" >
            <img src={product.image} />
            <h2> {product.title} </h2>
            <div className="price"> ${product.price} </div>
            <div className="actions">
                <button className="sell" disabled={!basketItem} onClick={removeBasket}>Çıkar</button>
                <span className="amount">{basketItem && basketItem.amount || 0}</span>
                <button  className="buy" disabled={total + product.price > money} onClick={addBasket}>Ekle</button>


            </div>

            <style jsx>{`
                .product{
                    padding:15px;
                    background: #eff;
                    border: 1px solid grey;
                    margin-bottom:20px;
                    width: 23%;
                }
                .product img{
                    width:100%;
                }
                .product .price
                {
                    font-size:23px;
                    color: limegreen;
                    padding:15px;
                }
                .product .actions
                {
                    display:flex;
                    align-items:center;
                }
                .actions{
                    text-align:center;
                }

                .actions button{
                    height:40px;
                    padding:0px 15px;
                    flex:1;
                    cursor:pointer;
                }
                .actions button[disabled]{
                    opacity:0.5;
                    cursor:not-allowed;
                }
                .actions .buy{
                    background: #9cf;
                    font-size:15px;
                    font-weight:500;
                    border-radius: 0 4px 4px 0;
                }
                .actions .sell{
                    background: #fc9;
                    font-size:15px;
                    font-weight:500;
                    border-radius: 4px 0px 0px 4px;
                }
                .actions .amount{
                    height:40px;
                    padding: 0px 15px;
                    font-weight:bold;
                    font-size:17px;
                    align-items:center;
                    justify-content:center;
                    display:flex;
                    border: 1px solid grey;
                    background:#fff;
                }
                `}</style>

        </div> 
}
        </>
    )
}

export default Product
