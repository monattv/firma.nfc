const container = document.getElementById(
"carrello-container"
);



let prodotto =
JSON.parse(
localStorage.getItem("prodottoCarrello")
);





if(!prodotto){


container.innerHTML = `

<h3>
Il carrello è vuoto
</h3>

`;



}
else{


mostraCarrello();


}







function mostraCarrello(){



container.innerHTML = `


<div class="cart-card">


<h2>

${prodotto.nome}

</h2>



<p>

Colore:

${prodotto.colore || "Non scelto"}

</p>




<p>

Forma:

${prodotto.forma || "Non scelta"}

</p>





<p>

Incisione:

${prodotto.incisione || "Nessuna"}

</p>





<p>

Testo:

${prodotto.testo || "-"}

</p>




<p>

Anello:

${prodotto.anello || "Non scelto"}

</p>





<h3>

Prezzo:

${prodotto.prezzo} €

</h3>



</div>



`;



}








function vaiOrdine(){


window.location.href =
"ordine.html";


}
