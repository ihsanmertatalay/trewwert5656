import {useState} from 'react'
import {moneyFormat} from '../helper'

function Header({money , total}) {
    return (
        <>
            {money-total >0  && (<div class="head">Harcamak için $ {moneyFormat(money -total)} paranız var</div>) }

            {money-total===0  && (<div class="head">Paran bitti</div>) }
        <style jsx>
            { `
            .head{
                position:sticky;
                top:0;
                background:linear-gradient(to bottom,lightgreen, turquoise);
                height:70px;
                color:white;
                font-size:25px;
                align-items:center;
                display :flex;
                justify-content:center;
                letter-spacing :1px;
                font-weight:bold;
            }
            
            
            `}
        </style>



        </>
    )
}

export default Header
