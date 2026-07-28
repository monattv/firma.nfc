const container = document.getElementById(
"carrello-container"
);



let carrello = JSON.parse(

localStorage.getItem("carrello")

) || [];




mostraCarrello();







function mostraCarrello(){



container.innerHTML="";



if(carrello.length === 0){


container.innerHTML = `

<h2>
Carrello vuoto
</h2>

`;

return;

}



let totale = 0;



carrello.forEach((prodotto,index)=>{



let prezzo = Number(
prodotto.prezzo
);



totale += prezzo * prodotto.quantita;




container.innerHTML += `


<div class="cart-card">


<h2>

${prodotto.nome}

</h2>



<p>
Colore:
${prodotto.colore || "-"}
</p>



<p>
Forma:
${prodotto.forma || "-"}
</p>



<p>
Testo:
${prodotto.testo || "-"}
</p>



<p>
Anello:
${prodotto.anello || "-"}
</p>



<p>

Quantità:

<button onclick="meno(${index})">
-
</button>


${prodotto.quantita}


<button onclick="piu(${index})">
+
</button>


</p>



<button onclick="elimina(${index})">

Rimuovi

</button>


</div>


`;



});





container.innerHTML += `


<h2>

Totale:

${totale.toFixed(2)} €

</h2>


`;



}









function piu(index){


carrello[index].quantita++;


salva();


}







function meno(index){



if(carrello[index].quantita > 1){

carrello[index].quantita--;

}



salva();



}








function elimina(index){


carrello.splice(index,1);



salva();


}








function salva(){


localStorage.setItem(

"carrello",

JSON.stringify(carrello)

);



mostraCarrello();


}








function vaiOrdine(){


window.location.href =
"ordine.html";


}
