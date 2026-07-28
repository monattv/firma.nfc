const API_URL = 
"https://script.google.com/macros/s/AKfycbyX9Kvz-Aa0PqfIoFLShhRcSuQYiffFFpZJKRncx_3S94PDN7-o83LGTHO5QrxILQ2V/exec";



let carrello = JSON.parse(

localStorage.getItem("carrello")

) || [];





const riepilogo =
document.getElementById(
"riepilogo-ordine"
);






mostraRiepilogo();








function mostraRiepilogo(){



if(carrello.length===0){


riepilogo.innerHTML =

"<h3>Carrello vuoto</h3>";

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



totale += 
prezzo * prodotto.quantita;





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
Forma:
${prodotto.forma || "-"}
</p>


<p>
Incisione:
${prodotto.incisione || "-"}
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
€ ${totale.toFixed(2)}

</h2>


`;



riepilogo.innerHTML = html;



}









document
.getElementById("form-ordine")
.addEventListener(

"submit",

function(e){



e.preventDefault();




let totale = 0;



carrello.forEach(p=>{


totale +=

Number(p.prezzo) *

p.quantita;


});







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

carrello,



totale:

totale.toFixed(2)


};







fetch(

API_URL,

{

method:"POST",


body:

JSON.stringify(ordine)

}

)

.then(

response=>response.json()

)

.then(

risultato=>{


console.log(
"Ordine inviato:",
risultato
);



localStorage.removeItem(
"carrello"
);



alert(

"Ordine inviato correttamente!"

);



window.location.href =
"index.html";



}

)

.catch(

errore=>{


console.error(
errore
);



alert(

"Errore invio ordine"

);



}

);



}

);
