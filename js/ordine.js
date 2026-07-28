let carrello = JSON.parse(

localStorage.getItem("carrello")

) || [];





const riepilogo = document.getElementById(

"riepilogo-ordine"

);





mostraRiepilogo();







function mostraRiepilogo(){



if(carrello.length===0){


riepilogo.innerHTML = `

<h3>

Nessun prodotto nel carrello

</h3>

`;

return;


}




let totale = 0;



let html = `

<h2>

Riepilogo ordine

</h2>

`;





carrello.forEach(prodotto=>{


let prezzo =
Number(prodotto.prezzo);



totale += prezzo * prodotto.quantita;




html += `


<div class="ordine-prodotto">


<h3>

${prodotto.nome}

</h3>


<p>

Colore:
${prodotto.colore || "-"}

</p>


<p>

Testo:
${prodotto.testo || "-"}

</p>


<p>

Quantità:
${prodotto.quantita}

</p>


</div>


`;



});




html += `


<h2>

Totale:
${totale.toFixed(2)} €

</h2>


`;



riepilogo.innerHTML = html;


}









document.getElementById(

"form-ordine"

).addEventListener(

"submit",

function(e){


e.preventDefault();




let ordine = {


nome:

document.getElementById("nome").value,


cognome:

document.getElementById("cognome").value,


telefono:

document.getElementById("telefono").value,


indirizzo:

document.getElementById("indirizzo").value,


cap:

document.getElementById("cap").value,


citta:

document.getElementById("citta").value,


note:

document.getElementById("note").value,


prodotti:

carrello


};




console.log(

"ORDINE",

ordine

);





alert(

"Ordine pronto per l'invio!"

);



});
