let cart =
JSON.parse(localStorage.getItem("cart"));



const container =
document.getElementById("cartContainer");




function loadCart(){


if(!cart){


container.innerHTML=
`
<div class="card">
<h2>
Il carrello è vuoto
</h2>
</div>
`;

return;

}



container.innerHTML=
`

<div class="card cartItem">


<div class="checkoutProduct">

🔑

</div>


<div>

<h2>
Portachiavi NFC Base
</h2>


<p>
Forma:
${cart.forma}
</p>


<p>
Colore:
${cart.colore}
</p>


<p>
Quantità:
${cart.quantita}
</p>


</div>


<button onclick="removeCart()">

❌

</button>


</div>

`;



document.getElementById("cartTotal")
.innerHTML=

(cart.prezzo * cart.quantita)
.toFixed(2);



}




function removeCart(){


localStorage.removeItem("cart");


cart=null;


loadCart();


}




function goCheckout(){


if(cart){

window.location.href=
"checkout.html";

}

}




loadCart();
