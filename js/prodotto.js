const API_URL = "https://script.google.com/macros/s/AKfycbyX9Kvz-Aa0PqfIoFLShhRcSuQYiffFFpZJKRncx_3S94PDN7-o83LGTHO5QrxILQ2V/exec";



const params = new URLSearchParams(
    window.location.search
);


const idProdotto = params.get("id");



const nome = document.getElementById("nome-prodotto");

const area = document.getElementById("personalizzazione");



let prodottoCorrente = null;



let configurazione = {

colore:"",
forma:"",
incisione:"",
testo:"",
anello:"",
immagine:""

};






fetch(API_URL)

.then(response=>{


if(!response.ok){

throw new Error("Errore caricamento prodotti");

}


return response.json();


})


.then(prodotti=>{



const prodotto = prodotti.find(

p => Number(p.ID) === Number(idProdotto)

);



if(!prodotto){

throw new Error("Prodotto non trovato");

}



prodottoCorrente = prodotto;



mostraProdotto(prodotto);



})


.catch(error=>{


console.error(
"Errore:",
error
);



if(area){

area.innerHTML =
"<p>Errore caricamento prodotto</p>";

}


});









function mostraProdotto(prodotto){



if(nome){

nome.innerHTML =
prodotto.Nome;

}



area.innerHTML = `


<div class="box-personalizzazione">


<h3>Colore</h3>

<select id="colore">


<option value="Verde">
Verde
</option>


<option value="Nero">
Nero
</option>


<option value="Blu">
Blu
</option>


</select>





<h3>Forma</h3>


<select id="forma">


<option value="Cuore">
Cuore
</option>


<option value="Rotondo">
Rotondo
</option>


</select>






<h3>Incisione</h3>


<select id="incisione">


<option value="Nessuna">
Nessuna
</option>


<option value="Testo">
Testo inciso
</option>


</select>





<input

id="testo"

placeholder="Scrivi il testo"

>







<h3>Anello</h3>


<select id="anello">


<option value="Nero">
Nero
</option>


<option value="Grigio">
Grigio
</option>


</select>





<button id="aggiungi">


Aggiungi al carrello

</button>



</div>


`;





document
.getElementById("aggiungi")
.addEventListener(

"click",

aggiungiCarrello

);



}









function aggiungiCarrello(){



configurazione.colore =

document.getElementById("colore").value;



configurazione.forma =

document.getElementById("forma").value;



configurazione.incisione =

document.getElementById("incisione").value;



configurazione.testo =

document.getElementById("testo").value;



configurazione.anello =

document.getElementById("anello").value;






let carrello = JSON.parse(

localStorage.getItem("carrello")

) || [];





let prodotto = {


id:

prodottoCorrente.ID,


nome:

prodottoCorrente.Nome,


prezzo:

Number(prodottoCorrente.Prezzo),



colore:

configurazione.colore,


forma:

configurazione.forma,


incisione:

configurazione.incisione,


testo:

configurazione.testo,


anello:

configurazione.anello,


immagine:

prodottoCorrente.Immagine,


quantita:

1



};





carrello.push(prodotto);



localStorage.setItem(

"carrello",

JSON.stringify(carrello)

);




alert(

"Prodotto aggiunto al carrello"

);



window.location.href =
"carrello.html";



}
